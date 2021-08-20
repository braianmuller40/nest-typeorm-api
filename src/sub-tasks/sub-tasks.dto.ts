import { IsEnum, IsOptional, IsString, Length } from "class-validator";
import { NivelPrioridad } from "src/enums/prioridad.enum";
import { Status } from "src/enums/status.enum";


export class SubTasksDto{

    @Length(5)
    @IsString()
    titulo: string;

    @Length(15)
    @IsString()
    @IsOptional()
    descripcion: string;

    @IsEnum(NivelPrioridad, {message: `Opcion invalida`})
    nivelPrioridad: NivelPrioridad;

    @IsEnum(Status)
    status: Status;

}