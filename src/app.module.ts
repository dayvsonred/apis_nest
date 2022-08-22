import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonController } from './person/person.controller';
import { PersonService } from './person/person.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://outros:Z90TJtXpUdkkZP6b@cluster0.muxczfl.mongodb.net/test?authSource=admin&replicaSet=atlas-is65td-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true')
  ],
  controllers: [AppController, PersonController],
  providers: [AppService, PersonService],
})
export class AppModule {}
