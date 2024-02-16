import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PromptsModule } from './prompt/prompts/prompts.module';

@Module({
  imports: [PromptsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
