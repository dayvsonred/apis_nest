import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonController } from './person/person.controller';
import { PersonService } from './person/person.service';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv'
dotenv.config()


@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(process.env.MONGO)
  ],
  controllers: [AppController, PersonController],
  providers: [AppService, PersonService],
})
export class AppModule {}
