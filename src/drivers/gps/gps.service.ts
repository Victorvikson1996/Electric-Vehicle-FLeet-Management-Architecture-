// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class GpsService {}

import { Injectable } from '@nestjs/common';
// import { EventBus } from '../core/eventBus.service';
import { EventBus } from 'src/core/service-registry/eventBus.service';

@Injectable()
export class GpsDriver {
  private location: { lat: number; lng: number } = { lat: 0, lng: 0 };

  constructor(private eventBus: EventBus) {}

  public getLocation(): { lat: number; lng: number } {
    return this.location;
  }

  public updateLocation(lat: number, lng: number): void {
    this.location.lat = lat;
    this.location.lng = lng;
    this.eventBus.publish('locationUpdate', {
      vehicleId: 'vehicle1', // Hardcoded for demo; use dynamic ID in production
      location: this.location,
    });
  }
}
