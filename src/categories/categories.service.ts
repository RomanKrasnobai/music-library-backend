import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesRepository } from './categories.repository';
import { CategoriesEntity } from './categories.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoriesRepository)
    private categoriesRepository: CategoriesRepository
  ) {}

  async getAllCategories(): Promise<CategoriesEntity[]> {
    return await this.categoriesRepository.find();
  }

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<CategoriesEntity> {
    return this.categoriesRepository.createCategory(createCategoryDto);
  }
}
