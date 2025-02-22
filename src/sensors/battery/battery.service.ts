// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class BatteryService {}

import { Injectable } from '@nestjs/common';
import { BatteryDriver } from 'src/drivers/battery/battery.service';

@Injectable()
export class BatterySensor {
  constructor(private batteryDriver: BatteryDriver) {}

  public getBatteryLevel(): number {
    return this.batteryDriver.getBatteryLevel();
  }
}
