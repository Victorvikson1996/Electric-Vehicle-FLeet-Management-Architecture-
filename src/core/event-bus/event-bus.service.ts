import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from 'eventemitter2';

@Injectable()
export class EventBusService {
  constructor(private eventEmitter: EventEmitter2) {}

  public publish<T>(event: string, data: T): void {
    this.eventEmitter.emit(event, data);
  }

  public subscribe<T>(event: string, callback: (data: T) => void): void {
    this.eventEmitter.on(event, callback);
  }

  public unsubscribe<T>(event: string, callback: (data: T) => void): void {
    this.eventEmitter.off(event, callback);
  }
}
