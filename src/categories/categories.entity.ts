import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MusicInstrumentsEntity } from '../music-instruments/music-instruments.entity';

@Entity()
export class CategoriesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => MusicInstrumentsEntity, instrument => instrument.category)
  musicInstruments: MusicInstrumentsEntity[]
}
