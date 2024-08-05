import { injectable } from "tsyringe";
import OrderModel from "../models/orderModel";

@injectable()
export default class OrderRepository {
    async findAll(){
        return await OrderModel.findAll()
    }

    async findById(id: number){
        return await OrderModel.findByPk(id)
    }

    async create(order: Partial<OrderModel>): Promise<OrderModel>{
        return await OrderModel.create( order as OrderModel )
    }

    async update(id: number, order: Partial<OrderModel>){
        return await OrderModel.update(order, {where: {id}} )
    }

    async delete(id: number){
        return await OrderModel.destroy({where: {id}} )
    }

    async findByPk(id: number){
        return await OrderModel.findByPk(id,{include: [OrderModel]})
    }
}