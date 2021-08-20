import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubTasksDto } from './sub-tasks.dto';
import { SubTasks } from './sub-tasks.entity';

@Injectable()
export class SubTasksService {

    constructor(
        @InjectRepository(SubTasks)
        private readonly repository: Repository<SubTasks>,
      ) {}


      async getAll() {
        return await this.repository.find();
      }

      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('Task does not exist');
        return post;
      }
    
      async createOne(dto: SubTasksDto) {
        const task = this.repository.create(dto);
        return await this.repository.save(task);
      }
    
      async editOne(id: number, dto: SubTasksDto) {
        const task = await this.repository.findOne(id);
    
        if (!task) throw new NotFoundException('Task does not exist');
    
        const editedTask = Object.assign(task, dto);
        return await this.repository.save(editedTask);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

}
