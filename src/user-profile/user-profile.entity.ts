import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserProfileEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  photo: string;

  @Column()
  firstName: string;

  @Column()
  secondName: string;

  @Column()
  address: string;

  @Column()
  aboutInfo: string;
}
