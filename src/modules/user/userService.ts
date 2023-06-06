import prisma from "../../database/prismaClient";
import Login from "../../interfaces/ILogin";
import TokenDetails from "../../interfaces/IToken";
import User from "../../interfaces/IUser";
import Crypt from "../../utils/Crypt";
import Token from "../../utils/Token";

export default class UserService {

  constructor(private _token: TokenDetails = new Token()) {}

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

  async loginUser({email, password}: Login) {
    const user = await prisma.user.findUnique({
      where: {email},
    })

    UserService.validateUser(user, password)

    const token = this._token.generate({ id: user?.id, email})

    return { ...user, token }
  }

  private static validateUser(user: any | null, password: string){
    if(!user || !Crypt.compare(password, user.password)) {
      throw new Error('Invalid email or password')
    }
  }
}