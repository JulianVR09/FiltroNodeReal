import { container } from "tsyringe";
import ProductService from "../services/productService";
import { Request, Response } from "express";
import { ProductType } from "../interfaces/products";

export default class ProductController {

    static async getAllProducts(_: Request, res: Response){
        try {
            const productService: ProductService = container.resolve(ProductService)
            const products: ProductType[] = await productService.getAllProducts();
            res.status(200).json({
                status: 200,
                products: products
            });
        } catch (err: any) {
            res.status(500).json({
                status: 500,
                message: `Internal Server Error: ${err.message}`
            })
        }
    }

    static async createProduct(req: Request, res: Response){
        try {
            const productService: ProductService = container.resolve(ProductService)
            const newProduct: ProductType = req.body
            console.log(newProduct)
            const createdProduct: ProductType | null = await productService.createProduct(newProduct);
            if(!createdProduct){
                res.status(400).json({
                    status: 400,
                    message: "Invalid product data"
                });
                return;
            }
            res.status(201).json({
                status: 201,
                message: "Product created successfully",
                product: createdProduct
            });
        } catch (err: any) {
            res.status(500).json({
                status: 500,
                message: `Internal Server Error: ${err.message}`
            })
        }
    }

    static async updateProduct(req: Request, res: Response){
        const productService: ProductService = container.resolve(ProductService)
        const id: number = parseInt(req.params.id);
        const product: Partial<ProductType> = req.body
        try {
            const [affectedCount]: number[] = await productService.updateProduct(id, product);
            if(affectedCount === 0){
                res.status(404).json({
                    status: 404,
                    message: "Product not found"
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: `Product updated successfully ${affectedCount}`
            })

        } catch (err: any) {
            res.status(500).json({
                status: 500,
                message: `Internal Server Error: ${err.message}`
            })
        }
    }

    static async deleteProduct(req: Request, res: Response){
        const productService: ProductService = container.resolve(ProductService)
        const id: number = parseInt(req.params.id);
        try {
            const deletedCount: number = await productService.deleteProduct(id);
            if(deletedCount === 0){
                res.status(404).json({
                    status: 404,
                    message: "Product not found"
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: `Product deleted successfully ${deletedCount}`
            })
        } catch (err: any) {
            res.status(500).json({
                status: 500,
                message: `Internal Server Error: ${err.message}`
            })
        }
    }

    // static async findProductById(req: Request, res: Response){
    //     const productService: ProductService = container.resolve(ProductService)
    //     const id: number = parseInt(req.params.id);
    //     try {
    //         const product: ProductType | null = await productService.findProductById(id);
    //         if(!product){
    //             res.status(404).json({
    //                 status: 404,
    //                 message: "Product not found"
    //             });
    //             return;
    //         }
    //         res.status(200).json({
    //             status: 200,
    //             product: product
    //         });
    //     } catch (err: any) {
    //         res.status(500).json({
    //             status: 500,
    //             message: `Internal Server Error: ${err.message}`
    //         })
    //     }
    // }
}