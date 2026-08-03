-include .env
export

ifeq ($(OS),Windows_NT)
    PROJECT_ROOT = $(CURDIR)
else
    PROJECT_ROOT = $(shell pwd)
endif


.PHONY: help init-net infra-up infra-down infra-logs env-up env-down env-cleanup migrate-create migrate-up migrate-down migrate-action run dev-all

ifdef s
  SERVICE_DIR := $(PROJECT_ROOT)/apps/$(s)
  ENV_FILE := $(SERVICE_DIR)/.env
  COMPOSE_FILE := $(PROJECT_ROOT)/apps/$(s)/docker-compose.yml
  MIGRATE_CONTAINER := $(s)-postgres-migrate
  include $(ENV_FILE)
  export
endif

check-s:
ifndef s
	$(error ❌ Ошибка: Не указан сервис! Использование: make <command> s=<service_name>)
endif

# --- СЕТЬ ---
init-net:
ifeq ($(OS),Windows_NT)
	@docker network inspect $(NET_NAME) >nul 2>&1 || docker network create $(NET_NAME) >nul 2>&1 || ver >nul
else
	@docker network inspect $(NET_NAME) >/dev/null 2>&1 || docker network create $(NET_NAME) >/dev/null 2>&1 || true
endif

# --- ОБЩАЯ ИНФРАСТРУКТУРА (Kafka, Debezium, Redis) ---
infra-up: init-net ## Запустить общую инфраструктуру (Kafka, Redis, Debezium)
	@docker compose -f $(INFRA_COMPOSE) up -d

infra-down: ## Остановить общую инфраструктуру
	@docker compose -f $(INFRA_COMPOSE) down

infra-logs: ## Посмотреть логи общей инфраструктуры
	@docker compose -f $(INFRA_COMPOSE) logs -f


env-up: check-s init-net ## Запустить базу данных сервиса (usage: make env-up s=my-service)
	@docker compose --env-file $(ENV_FILE) -f $(COMPOSE_FILE) up -d $(DB_CONTAINER)

env-down: check-s ## Остановить базу данных сервиса (usage: make env-down s=my-service)
	@docker compose --env-file $(ENV_FILE) -f $(COMPOSE_FILE) down $(DB_CONTAINER)

env-cleanup: check-s ## Полная очистка с удалением локальных volumes (usage: make env-cleanup s=my-service)
	@read -p "Clean up all volumes for $(SERVICE_NAME)? [Y/n]: " ans; \
	if [ "$$ans" = "Y" ] || [ "$$ans" = "y" ]; then \
		docker compose --env-file $(ENV_FILE) -f $(COMPOSE_FILE) down -v && \
		rm -rf ${SERVICE_DIR}/out/pgdata && \
		echo "All data cleaned up for $(SERVICE_NAME)."; \
	else \
		echo "Cleanup aborted."; \
	fi

migrate-create: check-s ## Создать миграцию (usage: make migrate-create s=my-service seq=add_users_table)
ifndef seq
	$(error ❌ Ошибка: Не указано имя миграции! Использование: make migrate-create s=$(s) seq=add_users_table)
endif
	@docker compose --env-file $(ENV_FILE) -f $(COMPOSE_FILE) run --rm $(MIGRATE_CONTAINER) \
		create \
		-ext sql \
		-dir /migrations \
		-seq "$(seq)"

migrate-up: check-s ## Накатить все миграции (usage: make migrate-up s=my-service action="up 1 or default up")
	@$(MAKE) migrate-action s=$(s) action="$(if $(action),$(action),up)"

migrate-down: check-s ## Откатить миграции (usage: make migrate-down s=my-service action="down 1")
	@$(MAKE) migrate-action s=$(s) action="$(if $(action),$(action),down 1)"

migrate-action: check-s
ifndef action
	$(error ❌ Ошибка: Не указано действие миграции! Использование: make migrate-action s=$(s) action=<up|down 1>)
endif
	@docker compose --env-file $(ENV_FILE) -f $(COMPOSE_FILE) run --rm $(MIGRATE_CONTAINER) \
		-path /migrations \
		-database "postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@$(DB_CONTAINER):$(DB_PORT)/${POSTGRES_DB}?sslmode=disable" \
		$(action)

env-port-forward: check-s ## Открыть проброс портов (usage: make env-port-forward s=my-service)
	@docker compose --env-file $(ENV_FILE) -f $(COMPOSE_FILE) up -d port-forwarder

env-port-close: check-s ## Закрыть проброс портов (usage: make env-port-close s=my-service)
	@docker compose --env-file $(ENV_FILE) -f $(COMPOSE_FILE) stop port-forwarder
	@docker compose --env-file $(ENV_FILE) -f $(COMPOSE_FILE) rm -f port-forwarder

run: check-s ## Запустить Go-код сервиса локально (usage: make run s=my-service)
	@cd $(SERVICE_DIR) && go run main.go
