import { injectable } from "tsyringe";
import UserModel from "../models/userModel";

@injectable()
export default class UserRepository {
    async findAll(){
        return await UserModel.findAll()
    }

    async findById(id: number){
        return await UserModel.findByPk(id)
    }
}
