import { v4 as uuid } from 'uuid';
import { Car } from './../../cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    make: 'Toyota',
    model: 'Corolla',
    year: 2019,
  },
  {
    id: '02672754-d9d4-40ea-9668-c1121a50df56',
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
  },
  {
    id: uuid(),
    make: 'Toyota',
    model: 'RAV4',
    year: 2021,
  },
  {
    id: uuid(),
    make: 'Honda',
    model: 'Civic',
    year: 2019,
  },
  {
    id: uuid(),
    make: 'Honda',
    model: 'Accord',
    year: 2020,
  },
  {
    id: uuid(),
    make: 'Honda',
    model: 'CR-V',
    year: 2021,
  },
];
