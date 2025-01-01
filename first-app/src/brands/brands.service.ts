import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto): Brand {
    const brand:Brand = {
      id: uuid(),
      ...createBrandDto,
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) throw new NotFoundException("Brand not found");
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);
    Object.assign(brand, updateBrandDto);
    return brand;
  }

  remove(id: string) {
    this.brands = this.brands.filter(brand => brand.id !== id);
    return this.brands;
  }

  fillCarsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
