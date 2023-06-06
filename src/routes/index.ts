import { Router } from "express";
import userRouter from "./userRouter";
import productsRouter from "./productsRouter";

const router = Router()

router.use('/login', userRouter);
router.use('/products', productsRouter)

export default router;