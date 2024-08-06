import { injectable, inject } from "tsyringe";
import ProductCartModel from "../models/productCartModel";
import ProductCartRepository from "../repositories/productCartRepository";

@injectable()
export default class ProductCartService {
    constructor(@inject(ProductCartRepository) private productcartRepository: ProductCartRepository){}

    async updateCart(id: number, cart: Partial<ProductCartModel>): Promise<[affectedCount: number]> {
        return await this.productcartRepository.update(id, cart);
    }

    async deleteProductCart(id: number){
        return await this.productcartRepository.delete(id);
    }
}