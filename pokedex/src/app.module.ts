import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validations';

@Module({
  imports:  [
      ConfigModule.forRoot({
        load: [ EnvConfiguration ],
        validationSchema: JoiValidationSchema
      }),
      MongooseModule.forRoot(process.env.MONGODB),
      ServeStaticModule.forRoot({
        rootPath: join(__dirname,'..','public'),
      }),
      PokemonModule,
      CommonModule,
      SeedModule
    ], 
   
  controllers: [],
  providers: []
})
export class AppModule {}
