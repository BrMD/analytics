import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { prompTypes } from 'src/types';
@Entity()
export class Prompt {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: prompTypes;

  @Column()
  value: string;
}
