import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { MusicInstrumentsService } from './music-instruments.service';
import { MusicInstrumentsEntity } from './music-instruments.entity';
import { CreateMusicInstrumentDto } from './dto/create-music-instrument.dto';

@Controller('music-instruments')
export class MusicInstrumentsController {
  constructor(private musicInstrumentsService: MusicInstrumentsService) { }

  @Get()
  async getMusicInstruments():Promise<MusicInstrumentsEntity[]> {
    return this.musicInstrumentsService.getAllMusicInstruments();
  }

  @Get('/:id')
  async getMusicInstrumentById(@Param('id', ParseIntPipe)id: number):Promise<MusicInstrumentsEntity> {
    return this.musicInstrumentsService.getMusicInstrumentById(id);
  }

  @Get('/:category')
  async getMusicInstrumentByCategory(@Param('category')category: number) {
    return this.musicInstrumentsService.getMusicInstrumentByCategory(category);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createMusicInstrument(@Body() createMusicInstrumentDto: CreateMusicInstrumentDto): Promise<MusicInstrumentsEntity> {
    return this.musicInstrumentsService.createMusicInstrument(createMusicInstrumentDto);
  }
}
