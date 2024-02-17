import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { MyDataSource } from 'ormconfig';
@Module({ imports: [TypeOrmModule.forRoot()] })
export class DatabaseModule {}
