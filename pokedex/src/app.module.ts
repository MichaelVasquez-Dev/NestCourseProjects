import { join } from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports:  [
      MongooseModule.forRoot('mongodb+srv://ADMIN_MICHAEL:M1ch43ll919_R31na2024aSd123@michaeldb.pfppp.mongodb.net/nestMongoPokedex'),
      ServeStaticModule.forRoot({
        rootPath: join(__dirname,'..','public'),
      }),
      PokemonModule,
      CommonModule,
      SeedModule
    ], 
   
  controllers: [],
  providers: [],
})
export class AppModule {}
