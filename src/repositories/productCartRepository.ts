import { injectable } from "tsyringe";
import ProductCartModel from "../models/productCartModel";

@injectable()
export default class ProductCartRepository {
    async update(id: number, cart: Partial<ProductCartModel>){
        return await ProductCartModel.update( {quantity: 1}, {where: {id}});
    }

    async delete(id: number){
        return await ProductCartModel.destroy({where: {id}});
    }
}