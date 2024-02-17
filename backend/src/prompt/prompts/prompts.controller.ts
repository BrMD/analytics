import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PromptsService } from './prompts.service';
import { CreatePromptDto } from 'src/entityPrompt/prompt.dto';

@Controller('prompts')
export class PromptsController {
  constructor(private readonly promptService: PromptsService) {}
  @Get()
  getPrompts(): string {
    return this.promptService.getPrompts();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createPrompt(@Body() createPromptDto: CreatePromptDto) {
    return this.promptService.createPrompt(createPromptDto);
  }

  @Delete()
  deletePrompt(): string {
    return this.promptService.deletePrompt();
  }
}
