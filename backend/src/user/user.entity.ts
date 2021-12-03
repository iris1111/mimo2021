import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserRoles {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column({ default: UserRoles.USER })
  role: string;
}
