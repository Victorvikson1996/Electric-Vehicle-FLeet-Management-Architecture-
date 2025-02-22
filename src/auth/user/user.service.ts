// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class UserService {}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string; // Hash in production
}
