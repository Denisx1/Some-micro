import { status as GrpcStatus } from "@grpc/grpc-js";
import { status } from "@grpc/grpc-js";
import { DomainError } from "./base.error";

export class NotFoundError extends DomainError {
  constructor(entity: string) {
    super({
      code: status.NOT_FOUND,
      message: `${entity} not found`,
    });
  }
}
export class AlreadyExistError extends DomainError {
  constructor(entity: string) {
    super({
      code: status.ALREADY_EXISTS,
      message: `${entity} already exists`,
    });
  }
}
export class ParseError extends DomainError {
  constructor(field?: string) {
    super({
      code: GrpcStatus.INVALID_ARGUMENT,
      message: `${field} Failed to parse`,
    });
  }
}
export class ExpiredError extends DomainError {
  constructor(message: string) {
    super({
      code: GrpcStatus.DEADLINE_EXCEEDED,
      message,
    });
  }
}

export class ValidationError extends DomainError {
  constructor(errors: any) {
    // Превращаем массив ошибок class-validator в одну строку или объект
    const message = Array.isArray(errors)
      ? errors
          .map((e) => Object.values(e.constraints || {}).join(", "))
          .join("; ")
      : errors;

    super({
      code: GrpcStatus.INVALID_ARGUMENT,
      message: message || "Validation failed",
    });

    // Можно сохранить оригинальные ошибки в свойство, чтобы интерцептор их выплеснул в DLT
    this.name = "ValidationError";
  }
}

export class NotCorrectError extends DomainError {
  constructor(entity?: string) {
    super({
      code: GrpcStatus.INVALID_ARGUMENT,
      message: `${entity} is not correct`,
    });
  }
}

export class UnauthenticatedError extends DomainError {
  constructor(message: string = "Invalid credentials") {
    super({
      code: GrpcStatus.UNAUTHENTICATED, // Код 16
      message: message,
    });
  }
}
