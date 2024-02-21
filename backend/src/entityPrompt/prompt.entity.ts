import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { prompTypes } from 'src/types';
import { UUID } from 'crypto';
@Entity()
export class Prompt {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column()
  type: prompTypes;

  @Column()
  value: string;
}
