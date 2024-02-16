import { Injectable } from '@nestjs/common';

@Injectable()
export class PromptsService {
  getPrompts(): string {
    return 'test';
  }
}
