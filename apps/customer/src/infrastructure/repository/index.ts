import { CustomerOutboxRepository } from "./customer.outbox.repository";
import { CustomerRepository } from "./customer.repository";

export const CustomerRepositories = [
  CustomerRepository,
  CustomerOutboxRepository,
];
