import { Router } from "express";
import productsController from "../modules/products/productsController";

const productsRouter = Router()

productsRouter.get('/', (req, res) => productsController.getProducts(req, res));
productsRouter.get('/product', (req, res) => productsController.getProduct(req, res));

export default productsRouter;