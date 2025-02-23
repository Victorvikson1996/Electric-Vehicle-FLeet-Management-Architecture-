// import { Controller } from '@nestjs/common';

// @Controller('fleet')
// export class FleetController {}

import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { FleetService } from './fleet.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';

@Controller('fleet')
export class FleetController {
  constructor(private fleetService: FleetService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getFleetStatus() {
    return this.fleetService.getFleetStatus();
  }

  @Post('drive')
  @UseGuards(JwtAuthGuard)
  driveVehicle(@Body() body: { vehicleId: string }) {
    this.fleetService.startDriving(body.vehicleId);
    return { message: 'Vehicle started driving' };
  }

  @Post('charge')
  @UseGuards(JwtAuthGuard)
  chargeVehicle(@Body() body: { vehicleId: string }) {
    this.fleetService.sendToCharge(body.vehicleId);
    return { message: 'Vehicle sent to charge' };
  }
}
