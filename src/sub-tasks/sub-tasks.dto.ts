import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
import { NivelPrioridad } from "src/enums/prioridad.enum";
import { Status } from "src/enums/status.enum";
import { Task } from "src/task/task.entity";


export class SubTasksDto{

    @Length(5)
    @IsString()
    titulo: string;

    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @IsString()
    @IsOptional()
    descripcion: string;

    @IsEnum(NivelPrioridad, {message: `Opcion invalida`})
    nivelPrioridad: NivelPrioridad;

    @IsEnum(Status)
    status: Status;

    @IsNotEmpty()
     task:Task;

}