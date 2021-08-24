import { NivelPrioridad } from "src/enums/prioridad.enum";
import { Status } from "src/enums/status.enum";
import { SubTasks } from "src/sub-tasks/sub-tasks.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task{
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

    @OneToMany(() => SubTasks, subTasks => subTasks.task)
    subTasks: SubTasks[];
}