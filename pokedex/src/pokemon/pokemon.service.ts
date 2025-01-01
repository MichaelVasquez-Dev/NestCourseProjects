import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { isValidObjectId, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto) {
    try {
      createPokemonDto.name = createPokemonDto.name.toLowerCase();
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error) {
      this.handleException(error);
    }
  }

  async findAll({limit, offset}: PaginationDto) {
    try {
      const pokemons = this.pokemonModel.find().sort({no: 1}).skip(offset).limit(limit).select('-__v');
      return pokemons;
    } catch (error) {}
  }

  async findOne(term: string) {
    try {
      let pokemon: Pokemon;

      if ( !isNaN(+term) ) pokemon = await this.pokemonModel.findOne({ no: +term });
      else if ( isValidObjectId(term) ) pokemon = await this.pokemonModel.findById(term);
      else {
        term = term.toLowerCase();
        pokemon = await this.pokemonModel.findOne({ name: term });
      }
      if (!pokemon) throw new NotFoundException(`Pokemon with term ${term} not found`);
      return pokemon;
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {
    const pokemon = await this.findOne(term);
    if (updatePokemonDto.name) updatePokemonDto.name = updatePokemonDto.name.toLowerCase();
    try {
      await pokemon.updateOne(updatePokemonDto, { new: true });
      return {...pokemon.toJSON(), ...updatePokemonDto};
    } catch (error) {
      this.handleException(error);
    }
  }

  async remove(term: string) {
    try {
      const { deletedCount } = await this.pokemonModel.deleteOne({ _id: term });
      if (!deletedCount) throw new NotFoundException(`Pokemon with term ${term} not found`);
      return term;
    } catch (error) {
      this.handleException(error);
    }
  }


  private handleException(error: any) {
    if (error.code === 11000) throw new BadRequestException('Pokemon already exists');
    throw new InternalServerErrorException('Something went wrong');
  }
}
