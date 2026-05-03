import { Injectable } from "@nestjs/common";
import { Subject } from "rxjs";

@Injectable()
export class StreamService {
  private userStreams = new Map<number, Subject<any>>();

  // Регистрация при коннекте
  registerUser(profileId: number, stream: Subject<any>) {
    this.userStreams.set(profileId, stream);
    console.log(`[StreamService] Profile ${profileId} connected`);
  }
  getStream(userId: number): Subject<any> | undefined {
    return this.userStreams.get(userId);
  }
  // Удаление при дисконнекте
  unregisterUser(profileId: number) {
    this.userStreams.delete(profileId);
    console.log(`[StreamService] Profile ${profileId} disconnected`);
  }
}
