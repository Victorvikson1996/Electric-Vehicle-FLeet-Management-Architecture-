// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class MovementService {}

import { Injectable } from '@nestjs/common';
import { LocationSensor } from 'src/sensors/location/location.service';
// import { LocationSensor } from '../sensors/location.sensor';

@Injectable()
export class MovementActuator {
  constructor(private locationSensor: LocationSensor) {}

  public move(lat: number, lng: number): void {
    this.locationSensor.updateLocation(lat, lng);
  }
}
