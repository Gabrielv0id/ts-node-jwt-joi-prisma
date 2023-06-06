import { Request, Response } from "express";
import productsService from "./productsService";

export default class productsController {
  static async getProducts(_req: Request, res: Response) {
    const products = await productsService.getProducts()

    return res.status(200).json(products)
  }

  static async getProduct(req: Request, res: Response) {
    const { name } = req.body
    const product = await productsService.getProduct(name)

    return res.status(200).json(product);
  }
}