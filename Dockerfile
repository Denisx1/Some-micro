FROM node:22.19.0

WORKDIR /app

COPY package.json package-lock.json  ./
# Устанавливаем зависимости
RUN npm install

# Глобально Nest CLI
RUN npm install -g @nestjs/cli

# Копируем остальные файлы сервиса и libs
COPY apps/user ./apps/user
COPY libs ./libs
COPY nest-cli.json tsconfig*.json ./

RUN apt-get update && apt-get install -y curl \
    && curl -L -o /bin/grpc_health_probe https://github.com/grpc-ecosystem/grpc-health-probe/releases/download/v0.4.14/grpc_health_probe-linux-amd64 \
    && chmod +x /bin/grpc_health_probe \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ARG SERVICE
ENV SERVICE=${SERVICE}



WORKDIR /app/apps/${SERVICE}

# для dev используем ts-node
CMD ["sh", "-c", "npm run start:dev -- $SERVICE"]
