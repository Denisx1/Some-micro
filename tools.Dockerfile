FROM golang:alpine AS builder

ENV GOTOOLCHAIN=auto
# то есть вот тут вот в докерфайле я буквально делаю что скачиваю и копируюя 2 бинарника:
# 1. protoc-gen-go      (генерирует *.pb.go — структуры и сообщения)
# 2. protoc-gen-go-grpc (генерирует *_grpc.pb.go — клиенты и интерфейсы серверов
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@latest && \
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

FROM bufbuild/buf:latest
# Копируем скомпилированные бинарники из первого этапа (builder)
# в системную папку /usr/local/bin/ нового контейнера, 
# чтобы buf сразу видел их в своем $PATH.
COPY --from=builder /go/bin/protoc-gen-go /usr/local/bin/
COPY --from=builder /go/bin/protoc-gen-go-grpc /usr/local/bin/

# потом сморя на строку в мекй файле 
# grpc-gen:
	# @docker run --rm -v "$(CURDIR):/workspace" -w /workspace my-buf-go generate

# где docker run --rm — запускает контейнер и автоматически удаляет его после завершения (чтобы не засорять систему)
# -v "$(CURDIR):/workspace" — монтирует текущую папку проекта с Windows/Linux в папку /workspace внутри контейнера
# -w /workspace — делаем /workspace рабочей директорией.
# my-buf-go generate — заставляет buf внутри нашего контейнера прочитать buf.gen.yaml и сгенерировать файлы локально через вшитые protoc-gen-go и protoc-gen-go-grpc

# Изначально Buf использовал плагины через интернет (remote: buf.build/.) из-за этого происходили 3 проблемы
# 1. Rate Limit (resource_exhausted) Buf заблокировал частые запросы с моего IP
# 2. Сдвоенные пути (proto/apps/proto/...) Из-за неверных опций out и местоположения файлов
# 3. Отсутствие бинарников в стандартном контейнере (executable file not found): Официальный образ bufbuild/buf — это просто утилита управления, в ней по умолчанию нет компиляторов Go (protoc-gen-go).

# соответственно я сделал свой образ my-buf-go, который решает все эти проблемы:
# Не зависит от интернета: Всё компилируется 100% локально внутри локального Docker-образа my-buf-go.
# Работает за 0.2 секунды: Нет накладных расходов на сетевые запросы к Buf BSR.
# Раскладывает файлы четко по папкам: Был proto/customer/v1/customer.proto — результат ляжет точно в proto/customer/v1/customer.pb.go.