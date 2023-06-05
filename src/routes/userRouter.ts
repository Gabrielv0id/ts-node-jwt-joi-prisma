import { Router } from "express";
import UserController from "../modules/user/userController";


const userRouter = Router();

userRouter.post('/signin', (req, res) => UserController.createUser(req, res))

export default userRouter;