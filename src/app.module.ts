import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './cats/dto';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CreateCatDto, UpdateCatDto, ListAllEntities, CatsService],
})
export class AppModule {}
