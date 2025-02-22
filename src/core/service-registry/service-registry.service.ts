import { Injectable } from '@nestjs/common';
import { EventBus } from './eventBus.service';

interface Service {
  id: string;
  type: 'vehicle' | 'chargingStation';
  location: { lat: number; lng: number };
  status: string;
}

@Injectable()
export class ServiceRegistryService {
  private services: Map<string, Service> = new Map();

  constructor(private eventBus: EventBus) {}

  public register(service: Service): void {
    this.services.set(service.id, service);
    this.broadcastUpdate();
  }

  public unregister(id: string): void {
    this.services.delete(id);
    this.broadcastUpdate();
  }

  public getService(id: string): Service | undefined {
    return this.services.get(id);
  }

  public getAllServices(): Service[] {
    return Array.from(this.services.values());
  }

  private broadcastUpdate(): void {
    this.eventBus.publish('serviceUpdate', this.getAllServices());
  }
}
