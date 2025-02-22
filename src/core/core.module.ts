import { Module } from '@nestjs/common';
import { EventBusService } from './event-bus/event-bus.service';
import { FsmService } from './fsm/fsm.service';
import { ServiceRegistryService } from './service-registry/service-registry.service';
import { UtilsService } from './utils/utils.service';

@Module({
  providers: [EventBusService, FsmService, ServiceRegistryService, UtilsService]
})
export class CoreModule {}
