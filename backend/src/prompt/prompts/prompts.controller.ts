import { Controller, Get } from '@nestjs/common';
import { PromptsService } from './prompts.service';

@Controller('prompts')
export class PromptsController {
  constructor(private readonly promptService: PromptsService) {}
  @Get()
  getPrompts(): string {
    return this.promptService.getPrompts();
  }
}
