import { Injectable } from '@nestjs/common';

export enum VehicleState {
  Idle = 'idle',
  Driving = 'driving',
  Charging = 'charging',
}

export interface VehicleContext {
  batteryLevel: number;
  location: { lat: number; lng: number };
  state: VehicleState;
}

@Injectable()
export class FsmService {
  private vehicle: VehicleContext = {
    batteryLevel: 100,
    location: { lat: 0, lng: 0 },
    state: VehicleState.Idle,
  };

  public startDriving(): void {
    if (
      this.vehicle.state === VehicleState.Idle &&
      this.vehicle.batteryLevel >= 20
    ) {
      this.vehicle.state = VehicleState.Driving;
      console.log('Vehicle started driving.');
      // Update state based on driving logic here.
    } else {
      console.log('Cannot start driving: either not idle or battery too low.');
    }
  }

  public stopDriving(): void {
    if (this.vehicle.state === VehicleState.Driving) {
      this.vehicle.state = VehicleState.Idle;
      console.log('Vehicle stopped.');
    }
  }

  public charge(): void {
    if (this.vehicle.state !== VehicleState.Charging) {
      this.vehicle.state = VehicleState.Charging;
      console.log('Vehicle is now charging.');
    }
  }

  public finishCharging(): void {
    if (
      this.vehicle.state === VehicleState.Charging &&
      this.vehicle.batteryLevel >= 100
    ) {
      this.vehicle.state = VehicleState.Idle;
      console.log('Vehicle finished charging.');
    }
  }

  public drive(distance: number): void {
    if (this.vehicle.state === VehicleState.Driving) {
      // Decrease battery level, update location
      this.vehicle.batteryLevel = Math.max(
        0,
        this.vehicle.batteryLevel - 5 * distance,
      );
      this.vehicle.location = {
        lat: this.vehicle.location.lat + 0.1 * distance,
        lng: this.vehicle.location.lng + 0.1 * distance,
      };
      console.log(`Vehicle drove ${distance} units.`);
      if (this.vehicle.batteryLevel < 20) {
        console.log('Battery low, switching to charging.');
        this.charge();
      }
    }
  }

  public getVehicleContext(): VehicleContext {
    return this.vehicle;
  }
}
