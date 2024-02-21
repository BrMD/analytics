import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Prompt } from 'src/entityPrompt/prompt.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreatePromptDto,
  CommondIdSearchPromptDto,
} from 'src/entityPrompt/prompt.dto';

@Injectable()
export class PromptsService {
  constructor(
    @InjectRepository(Prompt)
    private readonly promptRepository: Repository<Prompt>,
  ) {}
  getPrompts(): string {
    return 'test';
  }

  testetometro() {
    return console.log('testometro');
  }

  createPrompt(createPromptDto: CreatePromptDto) {
    const newPrompt = this.promptRepository.create(createPromptDto);
    return this.promptRepository.save(newPrompt);
  }

  deletePrompt(deletePromptDto: CommondIdSearchPromptDto) {
    return this.promptRepository.delete(deletePromptDto.id);
  }

  getPromptsById(findPrompts: CommondIdSearchPromptDto) {
    return this.promptRepository.find({ where: { id: findPrompts.id } });
  }
}
