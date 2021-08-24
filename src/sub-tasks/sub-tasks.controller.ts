import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SubTasksDto } from './sub-tasks.dto';
import { SubTasksService } from './sub-tasks.service';

@Controller('sub-tasks')
export class SubTasksController {

    constructor(private readonly service: SubTasksService) {}

    @Get()
    async getMany() {
      const data = await this.service.getAll();
      return { data };
    }
  
    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number) {
      const data = await this.service.getById(id);
      return { data };
    }

    @Get('/findSubTaskofTask/:id')
    async getSubTaskofTask(@Param('id', ParseIntPipe) id: number) {
      console.log(id);
      const data = await this.service.getSubTaskofTask(id);
      return { data };
    }
  
    @Post()
    async createPost(@Body() dto: SubTasksDto) {
      const data = await this.service.createOne(dto);
      return data;
    }
  
    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: SubTasksDto) {
      const data = await this.service.editOne(id, dto);
      return data;
    }
  
    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
      const data = await this.service.deleteOne(id);
      return data;
    }
}
