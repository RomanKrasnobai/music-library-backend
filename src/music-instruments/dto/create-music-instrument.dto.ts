import { IsNotEmpty } from 'class-validator';

export class CreateMusicInstrumentDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  category_id: number;

  @IsNotEmpty()
  image: string;
}
