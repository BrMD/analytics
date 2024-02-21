import { IsNotEmpty, IsUUID } from 'class-validator';
import { prompTypes } from 'src/types';
import { IsEmailOrWebsite, IsPromptTypes } from './customValidators';
import { UUID } from 'crypto';
// import { validateEmailOrDomain } from 'src/utils';

export class CreatePromptDto {
  @IsNotEmpty()
  @IsPromptTypes('type', {
    message: 'type of the requisition is not valid',
  })
  type: prompTypes;

  @IsNotEmpty()
  @IsEmailOrWebsite('value', {
    message: 'value must be an Email or Website',
  })
  value: string;
}

export class CommondIdSearchPromptDto {
  @IsNotEmpty()
  @IsUUID('all')
  id: UUID;
}
