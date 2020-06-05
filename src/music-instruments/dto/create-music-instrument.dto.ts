import { IsNotEmpty } from 'class-validator';

export class CreateMusicInstrumentDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  category: string;
}
