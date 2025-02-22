import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('jsonb')
  location: { lat: number; lng: number };

  @Column()
  batteryLevel: number;

  @Column()
  status: 'idle' | 'driving' | 'charging';

  @Column()
  lastUpdated: Date;
}
