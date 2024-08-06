import { Router } from "express";
import {orderRouter, productCartRouter, productRouter, userRouter } from "./index";


const router: Router = Router();

router.use("/users", userRouter);
router.use("/orders", orderRouter);
router.use("/products", productRouter);
router.use("/productCarts", productCartRouter);


export default router;