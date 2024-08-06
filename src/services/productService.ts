import { injectable, inject } from "tsyringe";
import ProductRepository from "../repositories/productRepository";
import { ProductType } from "../interfaces/products";

@injectable()
export default class ProductService {
    constructor(@inject(ProductRepository) private productRepository: ProductRepository) {}

    async getAllProducts(){
        return await this.productRepository.findAll();
    }

    async createProduct(product: Partial<ProductType>){
        return await this.productRepository.create(product);
    }

    async updateProduct(id: number, product: Partial<ProductType>): Promise<[affectedCount: number]> {
        return await this.productRepository.update(id, product);
    }

    async deleteProduct(id: number): Promise<number>{
        return await this.productRepository.delete(id);
    }

    async findProductById(id: number): Promise<ProductType | null> {
        return await this.productRepository.findByPk(id);
    }
}