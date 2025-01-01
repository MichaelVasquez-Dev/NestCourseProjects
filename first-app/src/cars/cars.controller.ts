import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')

export class CarsController {

    constructor(private readonly carsService: CarsService) {}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':cid')
    getCarById( @Param('cid', ParseUUIDPipe) carId: string) {

        return this.carsService.findCarById(carId);
    }

    @Post()
    // @UsePipes(ValidationPipe) // tambien se puede usar asi. pero como sera algo para todos los endpoints, se usa en el main.ts con el app.useGlobalPipes( new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }) );
    createCar( @Body() createCarDto: CreateCarDto ) {
        return this.carsService.createCar(createCarDto);
    }

    @Put(':cid')
    updateCar( @Param('cid', ParseUUIDPipe) cid: string, @Body() createCarDto: CreateCarDto ) {
        return this.carsService.updateCar(cid, createCarDto);
    }

    @Patch(':cid')
    updateCarPartial( @Param('cid', ParseUUIDPipe) cid: string, @Body() updateCarDto: UpdateCarDto ) {
        return this.carsService.updateCar(cid, updateCarDto);
    }

    @Delete(':cid')
    deleteCar( @Param('cid', ParseUUIDPipe) cid: string ) {
        return this.carsService.deleteCar(cid);
    }

}
