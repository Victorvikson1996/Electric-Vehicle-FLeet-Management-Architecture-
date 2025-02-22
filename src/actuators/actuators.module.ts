import { Module } from '@nestjs/common';
import { ChargingService } from './charging/charging.service';
import { MovementService } from './movement/movement.service';

@Module({
  providers: [ChargingService, MovementService],
})
export class ActuatorsModule {}
