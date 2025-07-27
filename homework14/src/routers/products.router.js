import { Router } from "express";

import { getProductsController,addProductsController } from "../controllers/product.controller.js";

const productsRouter = Router()

productsRouter.get("/", getProductsController)
productsRouter.post("/", addProductsController)

export default productsRouter

