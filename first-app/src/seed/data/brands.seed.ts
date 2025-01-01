import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';


export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Volvo',
    },
    {
        id: uuid(),
        name: 'Toyota',
    },
    {
        id: uuid(),
        name: 'Honda',
    },
    {
        id: uuid(),
        name: 'Jeep',
    },
    {
        id: uuid(),
        name: 'Tesla',
    },
]