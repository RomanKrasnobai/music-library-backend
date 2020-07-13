import { IsOptional, IsString } from 'class-validator';

export class CreateUserProfileDto {
  @IsOptional()
  photo: any;

  @IsString()
  firstName: string;

  @IsString()
  secondName: string;

  @IsString()
  address: string;

  @IsString()
  aboutInfo: string;
}
