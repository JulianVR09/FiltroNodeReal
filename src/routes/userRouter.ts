import { Router } from "express";
import UserController from "../controllers/usercontroller";

export const userRouter: Router = Router();

userRouter.get('/', UserController.getAllUsers);
userRouter.post('/', UserController.createUser);
userRouter.put('/:id', UserController.updateUser);
userRouter.delete('/:id', UserController.deleteUser);

