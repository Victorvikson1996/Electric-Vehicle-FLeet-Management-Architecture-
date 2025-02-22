import { Module } from '@nestjs/common';
import { GpsService } from './gps/gps.service';
import { BatteryService } from './battery/battery.service';
import { UdpService } from './udp/udp.service';

@Module({
  providers: [GpsService, BatteryService, UdpService]
})
export class DriversModule {}
