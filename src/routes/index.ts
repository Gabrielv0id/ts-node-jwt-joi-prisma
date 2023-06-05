import { Router } from "express";
import userRouter from "./userRouter";

const router = Router()

router.use('/Login', userRouter);

export default router;