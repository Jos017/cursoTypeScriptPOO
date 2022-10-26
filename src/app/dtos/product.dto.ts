import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

// type CreatePrductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>

export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
