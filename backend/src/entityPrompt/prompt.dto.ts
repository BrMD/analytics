import { IsNotEmpty } from 'class-validator';
import { prompTypes } from 'src/types';

export class CreatePromptDto {
  @IsNotEmpty()
  type: prompTypes;

  @IsNotEmpty()
  value: string;
}
