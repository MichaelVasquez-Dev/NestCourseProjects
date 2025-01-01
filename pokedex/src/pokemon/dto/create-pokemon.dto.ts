import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';
export class CreatePokemonDto {

    @IsInt({message: 'El número debe ser un entero'}) 
    @IsPositive({message: 'El número debe ser positivo'})
    @Min(1, {message: 'El número debe ser mayor a 0'})
    no: number;

    @IsString({message: 'El nombre debe ser una cadena de caracteres'}) 
    @MinLength(3, {message: 'El nombre debe tener al menos 3 caracteres'})
    name: string;
}
