import { IsNumber, IsOptional, IsString, IsUUID, isUUID } from "class-validator";

export class UpdateCarDto {

    @IsOptional()
    @IsUUID(4, { message: "La propiedad 'id' esta indefinida o su valor no es un tipo UUID" })
    readonly id?: string;

    @IsString({ message: "La propiedad 'make' esta indefinida o su valor no es un tipo string" })
    @IsOptional()
    readonly make?: string;

    @IsString({ message: "La propiedad 'model' esta indefinida o su valor no es un tipo string" })
    @IsOptional()
    readonly model?: string;

    @IsNumber({}, { message: "La propiedad 'year' esta indefinida o su valor no es un tipo number" })
    @IsOptional()
    readonly year?: number;

}