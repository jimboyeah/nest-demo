import { Controller, Get, Query, Post, Body, Put, Param, Delete, UsePipes, UseGuards, UseInterceptors, BadRequestException } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';
import { ValidationPipe } from '../pipes/validation.pipe';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoggingInterceptor } from 'src/interceptions/logging.interceptor';

@Controller('cats')
@UseGuards(new AuthGuard())
@UseInterceptors(LoggingInterceptor)
export class CatsController {
	constructor(private readonly createCatDto: CreateCatDto) {}
  
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() body: CreateCatDto) {
    console.log('createCatDto', this.createCatDto, body);
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query, list: ListAllEntities) {
    console.log('query', list, query);
    return `This action returns all cats (limit: ${list} items)`;
  }

  @Get(['/:id/:name', ':id'])
  findOne(@Param('id') id: string, @Param('name') name: string) {
    return `This action returns a #${id} cat ${name}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
