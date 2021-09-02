import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/abstract/genericService';
import { Repository } from 'typeorm';
import { TaskDto } from './task.dto';
import { Task } from './task.entity';

@Injectable()
export class TaskService extends GenericService<Task,TaskDto> {
    constructor(@InjectRepository(Task) repository: Repository<Task>) {
        super(repository);
      }
    
   

}
