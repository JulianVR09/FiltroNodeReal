import { injectable, inject } from "tsyringe";
import OrderModel from "../models/orderModel";
import OrderRepository from "../repositories/orderRepository";
import { OrderType } from "../interfaces/order";

@injectable()
export default class OrderService {
    constructor(@inject(OrderRepository) private orderRepository: OrderRepository){}

    async getAllOrders(): Promise<OrderType[]> {
        return await this.orderRepository.findAll();
    }

    async createOrder(order: Partial<OrderModel>): Promise<OrderType | null>{
        return await this.orderRepository.create(order);
    }

    async updateOrder(id: number, order: Partial<OrderModel>){
        return await this.orderRepository.update(id, order);
    }

    async deleteOrder(id: number): Promise<number>{
        return await this.orderRepository.delete(id);
    }

    async findOrderById(id: number): Promise<OrderType | null>{
        return await this.orderRepository.findByPk(id);
    }
}