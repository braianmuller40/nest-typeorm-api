import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/abstract/genericService';
import { Repository } from 'typeorm';
import { SubTasksDto } from './sub-tasks.dto';
import { SubTasks } from './sub-tasks.entity';

@Injectable()
export class SubTasksService extends GenericService<SubTasks,SubTasksDto>{

    constructor(
        @InjectRepository(SubTasks) readonly repository: Repository<SubTasks>) {
          super(repository);
      }

}
