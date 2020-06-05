import { EntityRepository, Repository } from 'typeorm';
import { MusicInstrumentsEntity } from './music-instruments.entity';
import { CreateMusicInstrumentDto } from './dto/create-music-instrument.dto';

@EntityRepository(MusicInstrumentsEntity)
export class MusicInstrumentsRepository extends Repository<MusicInstrumentsEntity> {
  async createMusicInstrument(createMusicInstrumentDto: CreateMusicInstrumentDto): Promise<MusicInstrumentsEntity> {
    const { title, description, category } = createMusicInstrumentDto;

    const musicInstrument = new MusicInstrumentsEntity();
    musicInstrument.title = title;
    musicInstrument.description = description;
    musicInstrument.category = category;
    await musicInstrument.save();
    return musicInstrument;
  }
}
