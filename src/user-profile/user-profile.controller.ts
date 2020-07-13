import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserProfileEntity } from './user-profile.entity';
import { UserProfileService } from './user-profile.service';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';

@Controller('user-profile')
export class UserProfileController {
  constructor(private userProfileService: UserProfileService) { }

  @Get('/:id')
  async getUserById(@Param('id', ParseIntPipe)id: number): Promise<UserProfileEntity> {
    return this.userProfileService.getUserById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUserProfile(@Body() createUserProfileDto: CreateUserProfileDto): Promise<UserProfileEntity> {
    return this.userProfileService.createUserProfile(createUserProfileDto);
  }
}
