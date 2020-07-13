import { Injectable, NotFoundException } from '@nestjs/common';
import { UserProfileEntity } from './user-profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProfileRepository } from './user-profile.repository';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';

@Injectable()
export class UserProfileService {
  constructor(
    @InjectRepository(UserProfileRepository)
    private userProfileRepository: UserProfileRepository
  ) { }

  async getUserById(id: number): Promise<UserProfileEntity> {
    const found = await this.userProfileRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return found;
  }

  async createUserProfile(createUserProfileDto: CreateUserProfileDto): Promise<UserProfileEntity> {
    return this.userProfileRepository.createUserProfile(createUserProfileDto);
  }
}
