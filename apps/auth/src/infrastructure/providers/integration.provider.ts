import { Injectable } from '@nestjs/common';
import { KafkaService } from '@app/common/infrastructure';
import { Observable } from 'rxjs';

@Injectable()
export class AuthKafkaService {
  constructor(private readonly kafkaProducer: KafkaService) {}

  kafkaEmit<T>(topic: string, data: T): Observable<void> {
    return this.kafkaProducer.emit(topic, data);
  }
}
