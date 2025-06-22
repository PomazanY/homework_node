import { Router } from "express";

import { getProductsController, getProductsByIdController, addProductsController, updateProductsByIdController, deleteProductsByIdController } from "../controllers/product.controller.js";

const productsRouter = Router()

productsRouter.get("/", getProductsController)
productsRouter.get("/:id", getProductsByIdController)
productsRouter.post("/", addProductsController)
productsRouter.put("/:id", updateProductsByIdController)
productsRouter.delete("/:id", deleteProductsByIdController)
export default productsRouter

