import { EntityRepository, Repository } from 'typeorm';
import { CategoriesEntity } from './categories.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@EntityRepository(CategoriesEntity)
export class CategoriesRepository extends Repository<CategoriesEntity> {
  async createCategory(createCategoryDto: CreateCategoryDto): Promise<CategoriesEntity> {
    const { name } = createCategoryDto;
    const category = new CategoriesEntity();
    category.name = name;
    await category.save();
    return category;
  }
}
