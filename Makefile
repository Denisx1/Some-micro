PROTO_PATH = ./libs/common/src/infrastructure/grpc/proto
CONTRACTS_DIR = ./libs/common/src/contracts
PLUGIN = ./node_modules/.bin/protoc-gen-ts_proto

proto-generate-one:
	@if [ -z "$(SERVICE)" ]; then \
		echo "❌ Error: SERVICE variable is empty. Usage: make proto-generate-one SERVICE=name"; \
		exit 1; \
	fi
	
	@echo "🚀 Generating and renaming for service: $(SERVICE)"
	
	# Створюємо цільову папку
	mkdir -p "$(CONTRACTS_DIR)/$(SERVICE)"
	
	# Генеруємо типи
	protoc --plugin=$(PLUGIN) \
		--ts_proto_out="$(CONTRACTS_DIR)/$(SERVICE)" \
		--ts_proto_opt=nestJs=true,exportCommonSymbols=false \
		-I $(PROTO_PATH) \
		"$(PROTO_PATH)/$(SERVICE).proto"
	
	# Перейменовуємо результат (твій mv)
	@if [ -f "$(CONTRACTS_DIR)/$(SERVICE)/$(SERVICE).ts" ]; then \
		mv "$(CONTRACTS_DIR)/$(SERVICE)/$(SERVICE).ts" "$(CONTRACTS_DIR)/$(SERVICE)/$(SERVICE).grpc.types.ts"; \
		echo "✅ Success: $(SERVICE).grpc.types.ts is ready"; \
	else \
		echo "❌ Error: Generation failed, $(SERVICE).ts not found"; \
		exit 1; \
	fi


SERVICES = $(basename $(notdir $(wildcard $(PROTO_PATH)/*.proto)))

proto-generate-all: $(SERVICES)

$(SERVICES):
	@echo "🚀 Processing service: $@"
	@mkdir -p $(CONTRACTS_DIR)/$@
	
	# 1. Генерація
	protoc --plugin=$(PLUGIN) \
		--ts_proto_out=$(CONTRACTS_DIR)/$@ \
		--ts_proto_opt=nestJs=true,exportCommonSymbols=false \
		-I $(PROTO_PATH) \
		$(PROTO_PATH)/$@.proto
	
	# 2. Динамічне перейменування
	@if [ -f "$(CONTRACTS_DIR)/$@/$@.ts" ]; then \
		mv "$(CONTRACTS_DIR)/$@/$@.ts" "$(CONTRACTS_DIR)/$@/$@.grpc.types.ts"; \
		echo "✅ Done: $@.grpc.types.ts"; \
	else \
		echo "⚠️  Skip: $@.ts not found"; \
	fi

clean:
	rm -rf $(CONTRACTS_DIR)/*
	@echo "🗑️  Contracts directory cleaned"

.PHONY: proto clean $(SERVICES)

prisma-gen:
	npx prisma generate --schema="./apps/$(SERVICE)/prisma/schema.prisma"

prisma-migrate-create:
	docker exec -it $(SERVICE) npx prisma migrate dev --create-only --schema="./apps/$(SERVICE)/prisma/schema.prisma"

docker-up-infrastructure:
	docker-compose -f docker-compose.dev.yml up -d kafka debezium postgres_container redis_container kafka-ui
up-user:
	docker-compose -f docker-compose.dev.yml up user
up-auth:
	docker-compose -f docker-compose.dev.yml up auth
up-customer:
	docker-compose -f docker-compose.dev.yml up customer	
up-cleaner:
	docker-compose -f docker-compose.dev.yml up cleaner
up-order:
	docker-compose -f docker-compose.dev.yml up order
up-notification:
	docker-compose -f docker-compose.dev.yml up notification	

