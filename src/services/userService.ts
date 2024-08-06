import { injectable, inject } from "tsyringe";
import UserRepository from "../repositories/userRepository";
import UserModel from "../models/userModel";
import { UserType } from "../interfaces/user";

@injectable()
export default class UserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  async getAllUsers(): Promise<UserType[]> {
    return await this.userRepository.findAll();
  }

  async createUser(user: Partial<UserModel>): Promise<UserType | null> {
    return await this.userRepository.create(user);
  }

  async updateUser(
    id: number,
    user: Partial<UserModel>
  ): Promise<[affectedCount: number]> {
    return await this.userRepository.update(id, user);
  }

  async deleteUser(id: number): Promise<number> {
    return await this.userRepository.delete(id);
  }

  async getUserEmail(email: string): Promise<UserModel | null> {
    return await this.userRepository.findByEmail(email);
  }

  async checkUserCredentials(
    email: string,
    password: string
  ): Promise<UserModel> {
    const user = await this.getUserEmail(email);
    if (user && user.password === password) {
      return user;
    }
    throw new Error("Invalid email or password");
  }
}
