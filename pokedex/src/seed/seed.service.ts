import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { AxiosAdapter } from 'src/common/adapters/axios.adapters';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokemonResponse } from './interfaces/poke.response.interface';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter
  ) {}

  async loadData() {
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=400');

    const pokemonToInsert: {name: string, no:number}[] = [];

    data.results.forEach(async ({ name, url }) => {
      const fragments: string[] = url.split('/');
      const no: number = +fragments[fragments.length - 2];
      pokemonToInsert.push({ name, no });
    });

    await this.pokemonModel.insertMany(pokemonToInsert);
    return data;
  }
}
