import { IsOptional, IsString } from 'class-validator';

export class CreateUserProfileDto {
  @IsOptional()
  photo: string;

  @IsString()
  firstName: string;

  @IsString()
  secondName: string;

  @IsString()
  address: string;

  @IsString()
  aboutInfo: string;
}
