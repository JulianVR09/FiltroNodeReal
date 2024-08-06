import { Router } from "express";
import OrderController from "../controllers/orderController";

export const orderRouter: Router = Router();

orderRouter.get('/', OrderController.getAllOrders);
orderRouter.post('/', OrderController.createOrder);
orderRouter.put('/:id', OrderController.updateOrder);
orderRouter.delete('/:id', OrderController.deleteOrder);

export default orderRouter;