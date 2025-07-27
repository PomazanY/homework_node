import * as productServices from "../services/product.service.js"

import validateBody from "../utils/validateBody.js"

import { productAddSchema } from "../validation/products.schema.js"

export const getProductsController = async (req, res) => {
    const result = await productServices.getProduct();
    res.json(result);
}


export const addProductsController = async (req, res) => {
    await validateBody(productAddSchema, req.body)

    const result = await productServices.addProduct(req.body);
    res.status(201).json(result)
}

