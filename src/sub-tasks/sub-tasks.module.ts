import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubTasksController } from './sub-tasks.controller';
import { SubTasks } from './sub-tasks.entity';
import { SubTasksService } from './sub-tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubTasks])],
  providers: [SubTasksService],
  controllers: [SubTasksController]
})
export class SubTasksModule {}
