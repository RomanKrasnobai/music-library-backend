import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { MusicInstrumentsModule } from './music-instruments/music-instruments.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { UserProfileModule } from './user-profile/user-profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    MusicInstrumentsModule,
    CategoriesModule,
    AuthModule,
    UserProfileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
