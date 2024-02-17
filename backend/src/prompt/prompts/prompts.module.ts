import { Module } from '@nestjs/common';
import { PromptsService } from './prompts.service';
import { PromptsController } from './prompts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prompt } from 'src/entityPrompt/prompt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prompt])],
  providers: [PromptsService],
  controllers: [PromptsController],
})
export class PromptsModule {}
