import { Module } from '@nestjs/common';
import { MusicInstrumentsController } from './music-instruments.controller';
import { MusicInstrumentsService } from './music-instruments.service';
import { MusicInstrumentsRepository } from './music-instruments.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([MusicInstrumentsRepository])
  ],
  controllers: [MusicInstrumentsController],
  providers: [MusicInstrumentsService]
})
export class MusicInstrumentsModule {}
