import { Request, Response } from "express";
import { container } from "tsyringe";
import OrderService from "../services/orderService";
import { OrderType } from "../interfaces/order";

export default class OrderController{

    static async getAllOrders(_: Request, res: Response){
        try {
            const orderService: OrderService = container.resolve(OrderService);
            const orders: OrderType[] = await orderService.getAllOrders();
            res.status(200).json({
                status: 200,
                orders: orders
            });
        } catch (err: any) {
            res.status(500).json({
                status: 500,
                message: `Internal Server Error: ${err.message}`
            });
        }
    }

    static async createOrder(req: Request, res: Response){
        try {
            const orderService: OrderService = container.resolve(OrderService)
            const newOrder: Partial<OrderType> = req.body
            const createdOrder: OrderType | null = await orderService.createOrder(newOrder);
            if(!createdOrder){
                res.status(400).json({
                    status: 400,
                    message: "Invalid order data"
                });
                return;
            }
            res.status(201).json({
                status: 201,
                message: "Order created successfully",
                order: createdOrder
            });
        } catch (err: any) {
            res.status(500).json({
                status: 500,
                message: `Internal Server Error: ${err.message}`
            });
        }
    }

    static async updateOrder(req: Request, res: Response){
        const orderService: OrderService = container.resolve(OrderService)
        const id: number = parseInt(req.params.id);
        const order: Partial<OrderType> = req.body
        try {
            const [affectedCount]: number[] = await orderService.updateOrder(id, order);
            if(affectedCount === 0){
                res.status(404).json({
                    status: 404,
                    message: "Order not found"
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: `Order updated successfully ${affectedCount}`
            })

        } catch (err: any) {
            res.status(500).json({
                status: 500,
                message: `Internal Server Error: ${err.message}`
            })
        }
    }

    static async deleteOrder(req: Request, res: Response){
        const orderService: OrderService = container.resolve(OrderService)
        const id: number = parseInt(req.params.id);
        try {
            const deletedCount: number = await orderService.deleteOrder(id);
            if(deletedCount === 0){
                res.status(404).json({
                    status: 404,
                    message: "Order not found"
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: `Order deleted successfully ${deletedCount}`
            })
        } catch (err: any) {
            res.status(500).json({
                status: 500,
                message: `Internal Server Error: ${err.message}`
            })
        }
    }

    // static async findOrderById(req: Request, res: Response){
    //     const orderService: OrderService = container.resolve(OrderService)
    //     const id: number = parseInt(req.params.id);
    //     try {
    //         const order: OrderType | null = await orderService.findOrderById(id);
    //         if(!order){
    //             res.status(404).json({
    //                 status: 404,
    //                 message: "Order not found"
    //             });
    //             return;
    //         }
    //         res.status(200).json({
    //             status: 200,
    //             order: order
    //         });
    //     } catch (err: any) {
    //         res.status(500).json({
    //             status: 500,
    //             message: `Internal Server Error: ${err.message}`
    //         });
    //     }
    // }
}