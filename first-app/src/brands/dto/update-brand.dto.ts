import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsString, MinLength } from 'class-validator';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsString({ message: 'Name nor valid or must be a string' })
  @MinLength(1, { message: 'Name is too short' })
  name: string;
}
