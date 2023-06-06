import { Router } from "express";
import UserController from "../modules/user/userController";
import createLoginMiddleware from "../middlewares/createLogin.middleware";
import loginMiddleware from "../middlewares/login.middleware";


const userRouter = Router();
const userController = new UserController();

userRouter.post('/signin', createLoginMiddleware, (req, res) => UserController.createUser(req, res))
userRouter.get('/', loginMiddleware, (req, res) => userController.loginUser(req, res))

export default userRouter;