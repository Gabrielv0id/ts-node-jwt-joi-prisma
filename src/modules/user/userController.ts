import { Request, Response } from "express";
import UserService from "./userService";

export default class UserController {
  static async createUser(req: Request, res: Response) {
    const userCreated = await UserService.createUser(req.body);

    return res.status(200).json({ message: `usuário ${userCreated.name} criado com sucesso!`})
  }
}