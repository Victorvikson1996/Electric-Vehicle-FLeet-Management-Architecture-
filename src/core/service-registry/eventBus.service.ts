import { Injectable } from '@nestjs/common';

type EventCallback = (data: any) => void;

@Injectable()
export class EventBus {
  private listeners: Map<string, EventCallback[]> = new Map();

  public subscribe(event: string, callback: EventCallback): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)?.push(callback);
  }

  public publish(event: string, data: any): void {
    this.listeners.get(event)?.forEach((callback) => callback(data));
  }
}
