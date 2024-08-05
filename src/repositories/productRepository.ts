import { injectable } from "tsyringe";
import ProductModel from "../models/productModel";

@injectable()
export default class ProductRepository {
    async create(product: Partial<ProductModel>): Promise<ProductModel>{
        return await ProductModel.create(product as ProductModel)
    }

    async update(id: number, product: Partial<ProductModel>){
        return await ProductModel.update(product, {where: {id}} )
    }

}
