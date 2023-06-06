import prisma from "../../database/prismaClient";

export default class productsService {
  static async getProducts() {
    const products = await prisma.product.findMany({
      select: {
        title: true,
        content: true,
        price: true,
        buyer: {
          select: {
            name: true,
            email: true,
          }
        },
      }
    });

    return products;
  }

  static async getProduct(name: string) {
    const product = await prisma.product.findFirst({
      where: {title: name},
      select: {
        title: true,
        content: true,
        price: true,
      }
    });

    if (!product) throw new Error ('product not found!');

    return product;
  }
}