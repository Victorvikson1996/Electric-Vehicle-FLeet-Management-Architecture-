import { Injectable } from '@nestjs/common';

@Injectable()
export class FleetService {
  getFleet(): string {
    return 'This action returns all fleet';
  }

  getFleetById(id: number): string {
    return `This action returns a #${id} fleet`;
  }

  createFleet(): string {
    return 'This action adds a new fleet';
  }

  updateFleet(id: number): string {
    return `This action updates a #${id} fleet`;
  }

  deleteFleet(id: number): string {
    return `This action removes a #${id} fleet`;
  }
}
