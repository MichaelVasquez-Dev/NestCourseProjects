import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [];

    findAll() {
        return this.cars;
    }

    findCarById( carId: string ) {
        const car = this.cars.find( car => car.id === carId );
        if (!car) throw new NotFoundException(`Car with ID '${carId}' not found`);
        return car;
    }

    createCar(createCarDto: CreateCarDto) {

        const car: Car = { id: uuid(), ...createCarDto };

        // const car: Car = createCarDto as Car;
        // car.id = uuid();

        this.cars.push(car);

        return car;
    }

    updateCar( carId: string, car: CreateCarDto|UpdateCarDto ) {
        const currCar = this.findCarById(carId);
        Object.assign(currCar, car);
        return currCar;
    }

    deleteCar( carId: string ) {
        const index = this.cars.findIndex( car => car.id === carId );
        if (index < 0) throw new NotFoundException(`Car with ID '${carId}' not found`);
        this.cars.splice(index, 1);
    }

    fillCarsWithSeedData( cars: Car[] ) {
        this.cars = cars;
    }

}
