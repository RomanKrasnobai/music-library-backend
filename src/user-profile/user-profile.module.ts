import { Module } from '@nestjs/common';
import { UserProfileController } from './user-profile.controller';
import { UserProfileService } from './user-profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfileRepository } from './user-profile.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserProfileRepository])
  ],
  controllers: [UserProfileController],
  providers: [UserProfileService]
})
export class UserProfileModule {}
