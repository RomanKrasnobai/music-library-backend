import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoriesEntity } from '../categories/categories.entity';

@Entity()
export class MusicInstrumentsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  category_id: number;

  @Column()
  image: string;

  @ManyToOne(type => CategoriesEntity, category => category.musicInstruments)
  category: CategoriesEntity;
}
