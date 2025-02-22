// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class BatteryService {}

import { Injectable } from '@nestjs/common';
import { EventBus } from 'src/core/service-registry/eventBus.service';

@Injectable()
export class BatteryDriver {
  private level: number = 100;

  constructor(private eventBus: EventBus) {}

  public getBatteryLevel(): number {
    return this.level;
  }

  public setBatteryLevel(level: number): void {
    this.level = Math.max(0, Math.min(100, level));
    this.eventBus.publish('batteryUpdate', { level: this.level });
    if (this.level < 20) {
      this.eventBus.publish('lowBattery', { vehicleId: 'vehicle1' }); // Hardcoded for demo
    }
  }

  public charge(amount: number): void {
    this.setBatteryLevel(this.level + amount);
  }

  public drain(amount: number): void {
    this.setBatteryLevel(this.level - amount);
  }
}
