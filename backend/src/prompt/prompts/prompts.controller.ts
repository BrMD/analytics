import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { PromptsService } from './prompts.service';
import {
  CreatePromptDto,
  CommondIdSearchPromptDto,
} from 'src/entityPrompt/prompt.dto';

@Controller('prompts')
export class PromptsController {
  constructor(private readonly promptService: PromptsService) {}

  @Get('/')
  getPromptsById(@Query('id') id: CommondIdSearchPromptDto) {
    return this.promptService.getPromptsById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createPrompt(@Body() createPromptDto: CreatePromptDto) {
    return this.promptService.createPrompt(createPromptDto);
  }

  @Delete()
  @UsePipes(ValidationPipe)
  deletePrompt(@Body() deletePromptDto: CommondIdSearchPromptDto) {
    return this.promptService.deletePrompt(deletePromptDto);
  }
}
