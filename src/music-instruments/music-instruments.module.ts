import { Module } from '@nestjs/common';
import { MusicInstrumentsController } from './music-instruments.controller';
import { MusicInstrumentsService } from './music-instruments.service';

@Module({
  controllers: [MusicInstrumentsController],
  providers: [MusicInstrumentsService]
})
export class MusicInstrumentsModule {}
