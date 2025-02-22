// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class ChargingService {}

import { Injectable } from '@nestjs/common';
import { BatteryDriver } from 'src/drivers/battery/battery.service';

@Injectable()
export class ChargingActuator {
  constructor(private batteryDriver: BatteryDriver) {}

  public charge(amount: number): void {
    this.batteryDriver.charge(amount);
  }
}
