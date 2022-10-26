import axios from 'axios';
import { UpdateProductDto } from '../dtos/product.dto';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];
  constructor(protected url: string) {}

  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    // const array: TypeClass[] = [];
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.getAll();

// const service1 = new BaseHttpService<Category>();
// service.getAll();
(async () => {
  const url1 = 'http://api.escuelajs.co/api/v1/products';

  const productService = new BaseHttpService<Product>(url1);
  const rta = await productService.getAll();
  console.log(rta);
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'assa',
  });

  const url2 = 'http://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);
  const rta1 = await categoryService.getAll();
  console.log(rta1);
  // categoryService.update<Category['id'], UpdateCategoryDto>(1, {
  //   title: 'assa',
  // })
})();
