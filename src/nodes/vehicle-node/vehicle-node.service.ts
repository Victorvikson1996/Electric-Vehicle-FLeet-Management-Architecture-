// src/nodes/vehicleNode.ts
import { Injectable } from '@nestjs/common';
import { EventBus } from 'src/core/service-registry/eventBus.service';
import { generateId } from 'src/core/utils/utils.service';

@Injectable()
export class VehicleNode {
  public id: string;
  public batteryLevel = 100;
  public location: { lat: number; lng: number } = { lat: 0, lng: 0 };

  constructor(private eventBus: EventBus) {
    this.id = generateId();
    this.subscribeToEvents();
  }

  private subscribeToEvents(): void {
    this.eventBus.subscribe('chargeStarted', (data: { vehicleId: string }) => {
      if (data.vehicleId === this.id) {
        this.batteryLevel = 100;
        console.log(`Vehicle ${this.id} is charging.`);
      }
    });
  }

  public drive(): void {
    if (this.batteryLevel > 20) {
      this.batteryLevel -= 10;
      this.location.lat += 0.05;
      this.location.lng += 0.05;
      console.log(
        `Vehicle ${this.id} drove to ${JSON.stringify(this.location)}`,
      );
      this.eventBus.publish('locationUpdate', {
        vehicleId: this.id,
        location: this.location,
      });
      if (this.batteryLevel <= 20) {
        this.eventBus.publish('lowBattery', { vehicleId: this.id });
      }
    } else {
      console.log(`Vehicle ${this.id} has low battery.`);
    }
  }
}
