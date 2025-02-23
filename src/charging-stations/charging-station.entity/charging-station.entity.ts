import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ChargingStation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('jsonb')
  location: { lat: number; lng: number };

  @Column()
  isAvailable: boolean;

  @Column()
  lastUpdated: Date;
}
