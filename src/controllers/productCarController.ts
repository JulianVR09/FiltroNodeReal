import { container } from "tsyringe";
import { Request, Response } from "express";
import ProductCartService from "../services/productCartService";
import { ProductCartType } from "../interfaces/productCart";

export default class ProductCartController {

    static async updateCart(req: Request, res: Response){
        const productCartService: ProductCartService = container.resolve(ProductCartService)
        const id: number = parseInt(req.params.id);
        const cart: Partial<ProductCartType> = req.body
        try {
            const [affectedCount]: number[] = await productCartService.updateCart(id, cart);
            if(affectedCount === 0){
                res.status(404).json({
                    status: 404,
                    message: "Product cart not found"
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: `Product cart updated successfully ${affectedCount}`
            })

        } catch (err: any) {
            res.status(500).json({
                status: 500,
                message: `Internal Server Error: ${err.message}`
            })
        }
    }

    static async deleteProductCart(req: Request, res: Response){
        const productCartService: ProductCartService = container.resolve(ProductCartService)
        const id: number = parseInt(req.params.id);
        try {
            const deletedCount: number = await productCartService.deleteProductCart(id);
            if(deletedCount === 0){
                res.status(404).json({
                    status: 404,
                    message: "Product cart not found"
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: `Product cart deleted successfully ${deletedCount}`
            })
        } catch (err: any) {
            res.status(500).json({
                status: 500,
                message: `Internal Server Error: ${err.message}`
            })
        }
    }
}