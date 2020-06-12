import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoriesEntity } from './categories.entity';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService
  ) {}

  @Get()
  getAllCategories(): Promise<CategoriesEntity[]> {
    return this.categoriesService.getAllCategories();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<CategoriesEntity> {
    return this.categoriesService.createCategory(createCategoryDto);
  }
}
