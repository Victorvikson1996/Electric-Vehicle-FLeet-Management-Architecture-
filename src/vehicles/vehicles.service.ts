// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class VehiclesService {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity/vehicle.entity';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private vehiclesRepository: Repository<Vehicle>,
  ) {}

  async create(vehicle: Partial<Vehicle>): Promise<Vehicle> {
    const newVehicle = this.vehiclesRepository.create(vehicle);
    return await this.vehiclesRepository.save(newVehicle);
  }

  async findAll(): Promise<Vehicle[]> {
    return await this.vehiclesRepository.find();
  }

  async update(id: string, vehicle: Partial<Vehicle>): Promise<Vehicle> {
    await this.vehiclesRepository.update(id, vehicle);
    return await this.vehiclesRepository.findOneOrFail({ where: { id } });
  }
}
