import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { FleetModule } from './fleet/fleet.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { ChargingStationsModule } from './charging-stations/charging-stations.module';
import { DriversModule } from './drivers/drivers.module';
import { SensorsModule } from './sensors/sensors.module';
import { ActuatorsModule } from './actuators/actuators.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [CoreModule, FleetModule, VehiclesModule, ChargingStationsModule, DriversModule, SensorsModule, ActuatorsModule, AuthModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
