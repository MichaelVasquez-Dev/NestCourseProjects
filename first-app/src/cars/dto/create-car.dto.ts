import { IsNumber, IsString } from "class-validator";

export class CreateCarDto {

    @IsString({ message: "La propiedad 'make' esta indefinida o su valor no es un tipo string" })
    readonly make: string;

    @IsString({ message: "La propiedad 'model' esta indefinida o su valor no es un tipo string" })
    readonly model: string;

    @IsNumber({}, { message: "La propiedad 'year' esta indefinida o su valor no es un tipo number" })
    readonly year: number;

}