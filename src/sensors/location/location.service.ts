// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class LocationService {}

import { Injectable } from '@nestjs/common';
// import { GpsDriver } from '../drivers/gps.driver';
import { GpsDriver } from 'src/drivers/gps/gps.service';

@Injectable()
export class LocationSensor {
  constructor(private gpsDriver: GpsDriver) {}

  public getLocation(): { lat: number; lng: number } {
    return this.gpsDriver.getLocation();
  }

  public updateLocation(lat: number, lng: number): void {
    this.gpsDriver.updateLocation(lat, lng);
  }
}
