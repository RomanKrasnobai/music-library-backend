import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './user/users.module';
import { MusicInstrumentsModule } from './music-instruments/music-instruments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    MusicInstrumentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
