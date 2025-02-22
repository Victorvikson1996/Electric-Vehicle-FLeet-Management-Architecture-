import { Test, TestingModule } from '@nestjs/testing';
import { FleetManagerService } from './fleet-manager.service';

describe('FleetManagerService', () => {
  let service: FleetManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FleetManagerService],
    }).compile();

    service = module.get<FleetManagerService>(FleetManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
