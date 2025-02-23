// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class ChargingStationsService {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChargingStation } from './charging-station.entity/charging-station.entity';

@Injectable()
export class ChargingStationService {
  constructor(
    @InjectRepository(ChargingStation)
    private stationsRepository: Repository<ChargingStation>,
  ) {}

  async create(station: Partial<ChargingStation>): Promise<ChargingStation> {
    const newStation = this.stationsRepository.create(station);
    return await this.stationsRepository.save(newStation);
  }

  async findAll(): Promise<ChargingStation[]> {
    return await this.stationsRepository.find();
  }

  async update(
    id: string,
    station: Partial<ChargingStation>,
  ): Promise<ChargingStation> {
    await this.stationsRepository.update(id, station);
    return await this.stationsRepository.findOneOrFail({ where: { id } });
  }
}
