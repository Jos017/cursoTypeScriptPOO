import axios from 'axios';
import { faker } from '@faker-js/faker';
import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';

// Use http to implement a crud from api
// api: https://api.escuelajs.co/

export class ProductHttpService implements ProductService {
  private url = 'http://api.escuelajs.co/api/v1/products';

  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }
  async update(id: Product['id'], changes: UpdateProductDto): Promise<Product> {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }
  async create(dto: CreateProductDto): Promise<Product> {
    const { data } = await axios.post<Product>(this.url, dto);
    return data;
  }
  async findOne(id: number): Promise<Product | undefined> {
    const { data } = await axios.get<Product>(`${this.url}/${id}`);
    return data;
  }
}
