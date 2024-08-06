import { Router } from "express";
import ProductCartController from "../controllers/productCarController";

export const productCartRouter: Router = Router();

productCartRouter.put('/:id', ProductCartController.updateCart);
productCartRouter.delete('/:id', ProductCartController.deleteProductCart);

export default productCartRouter;