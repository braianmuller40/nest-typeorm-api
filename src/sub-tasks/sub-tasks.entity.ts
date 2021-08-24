import { NivelPrioridad } from "src/enums/prioridad.enum";
import { Status } from "src/enums/status.enum";
import { Task } from "src/task/task.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SubTasks{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;
    
    @Column()
    fechaCreacion: Date;

    @Column()
    descripcion: string;

    @Column()
    nivelPrioridad: NivelPrioridad;

    @Column()
    status: Status;

    @ManyToOne(() => Task, task => task.subTasks)
    task: Task;
}