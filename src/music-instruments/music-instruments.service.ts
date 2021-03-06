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

  async getAllMusicInstruments():Promise<MusicInstrumentsEntity[]> {
    return await this.musicInstrumentsRepository.find({ relations: ["category"] });
  }

  async getMusicInstrumentById(id: number):Promise<MusicInstrumentsEntity> {
    const found = await this.musicInstrumentsRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Music Instrument with ID "${id}" not found`);
    }
    return found;
  }

  async getMusicInstrumentByCategory(category: number) {
    // const arr = await this.musicInstrumentsRepository.find(
    //   {select: '*'},
    //   {order: {category_id: 'category'}}
    //   );
    // return arr;
  }

  async createMusicInstrument(createMusicInstrumentDto: CreateMusicInstrumentDto): Promise<MusicInstrumentsEntity> {
    return this.musicInstrumentsRepository.createMusicInstrument(createMusicInstrumentDto);
  }
}
