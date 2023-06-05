import prisma from "../../database/prismaClient";
import User from "../../interfaces/IUser";
import Crypt from "../../utils/Crypt";

export default class UserService {
  static async createUser({name, email, password}: User) {
    const encryptedPassword = Crypt.encrypt(password)
    const userCreated = await prisma.user.create({
      data: {
        name,
        email,
        password: encryptedPassword
      }
    });

    return userCreated;
  }
}