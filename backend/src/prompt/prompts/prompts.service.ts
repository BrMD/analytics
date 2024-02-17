import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Prompt } from 'src/entityPrompt/prompt.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePromptDto } from 'src/entityPrompt/prompt.dto';

@Injectable()
export class PromptsService {
  constructor(
    @InjectRepository(Prompt)
    private readonly promptRepository: Repository<Prompt>,
  ) {}
  getPrompts(): string {
    return 'test';
  }

  createPrompt(createPromptDto: CreatePromptDto) {
    const newUser = this.promptRepository.create(createPromptDto);
    return this.promptRepository.save(newUser);
  }

  deletePrompt(): string {
    return 'deleteprompt';
  }
}
