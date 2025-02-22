import { Module } from '@nestjs/common';
import { LocationService } from './location/location.service';
import { BatteryService } from './battery/battery.service';

@Module({
  providers: [LocationService, BatteryService]
})
export class SensorsModule {}
