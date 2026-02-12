// libs/common/src/pipes/universal-validation.pipe.ts
import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from '../error';

export const GlobalValidationPipe = new ValidationPipe({
  // Все ошибки во всех сервисах теперь будут превращаться в твой Domain ValidationError
  exceptionFactory: (errors) => new ValidationError(errors),

  // Строгая проверка: если в DTO нет поля, а в JSON оно есть — это ошибка
  whitelist: true,
  forbidNonWhitelisted: true,

  // Важно для Kafka: не меняем типы автоматически, чтобы ловить ошибки типов
  transform: false,
});
