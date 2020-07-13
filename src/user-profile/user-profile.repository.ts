import { EntityRepository, Repository } from 'typeorm';
import { UserProfileEntity } from './user-profile.entity';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';

@EntityRepository(UserProfileEntity)
export class UserProfileRepository extends Repository<UserProfileEntity> {
  async createUserProfile(createUserProfileDto: CreateUserProfileDto): Promise<UserProfileEntity> {
    const { photo, firstName, secondName, address, aboutInfo }= createUserProfileDto;

    const userProfile = new UserProfileEntity();
    userProfile.photo = photo;
    userProfile.firstName = firstName;
    userProfile.secondName = secondName;
    userProfile.address = address;
    userProfile. aboutInfo = aboutInfo;
    await userProfile.save();
    return userProfile;
  }
}
