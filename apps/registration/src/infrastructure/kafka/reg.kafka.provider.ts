import { KafkaService } from '@app/common/infrastructure';
import { Injectable } from '@nestjs/common';
import { BaseCandidate } from '@app/common/domain';
import { Observable } from 'rxjs';

@Injectable()
export class RegKafkaProduser {
  constructor(private readonly kafkaProducer: KafkaService) {}

  kafkaEmint<T>(topic: string, message: T): Observable<void> {
    return this.kafkaProducer.emit(topic, message);
  }
}
