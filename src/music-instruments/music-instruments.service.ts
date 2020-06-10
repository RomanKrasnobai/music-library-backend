import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MusicInstrumentsRepository } from './music-instruments.repository';
import { MusicInstrumentsEntity } from './music-instruments.entity';
import { CreateMusicInstrumentDto } from './dto/create-music-instrument.dto';

@Injectable()
export class MusicInstrumentsService {
  constructor(
    @InjectRepository(MusicInstrumentsRepository)
    private musicInstrumentsRepository: MusicInstrumentsRepository,
  ) {}

  async getMusicInstruments():Promise<MusicInstrumentsEntity[]> {
    return await this.musicInstrumentsRepository.find();
  }

  async getMusicInstrument(id: number):Promise<MusicInstrumentsEntity> {
    const found = await this.musicInstrumentsRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Music Instrument with ID "${id}" not found`);
    }
    return found;
  }

  async createMusicInstrument(createMusicInstrumentDto: CreateMusicInstrumentDto): Promise<MusicInstrumentsEntity> {
    return this.musicInstrumentsRepository.createMusicInstrument(createMusicInstrumentDto);
  }
}
