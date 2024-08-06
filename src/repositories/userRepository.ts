import { injectable } from "tsyringe";
import UserModel from "../models/userModel";

@injectable()
export default class UserRepository {
    async findAll(){
        return await UserModel.findAll()
    }

    async create(user: Partial<UserModel>): Promise<UserModel>{
        return await UserModel.create(user as UserModel)
    }

    async update(id: number, user: Partial<UserModel>){
        return await UserModel.update(user, {where: {id}} )
    }

    async delete(id: number){
        return await UserModel.destroy({where: {id}})
    }

    async findByEmail(email: string){
        return await UserModel.findOne({ where: {email}});
    }
}
