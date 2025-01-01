import { IsString, MinLength } from "class-validator";

export class CreateBrandDto {

    @IsString({ message: 'Name nor valid or must be a string' })
    @MinLength(1, { message: 'Name is too short' })
    name: string;

}
