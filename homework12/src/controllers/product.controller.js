import * as productServices from "../services/product.service.js"

import validateBody from "../utils/validateBody.js"
import HttpException from "../validation/HttpException.js"

import { productAddSchema, productUpdateSchema } from "../validation/products.schema.js"

export const getProductsController = async (req, res) => {
    const result = await productServices.getProduct();
    res.json(result);
}

export const getProductsByIdController = async (req, res) => {
    const { id } = req.params
    const result = await productServices.getProductById(id)
    if (!result) throw HttpException(404, `Product with id=${id} not found`)
    res.json(result)
}

export const addProductsController = async (req, res) => {
    await validateBody(productAddSchema, req.body)

    const result = await productServices.addProduct(req.body);
    res.status(201).json(result)
}

export const updateProductsByIdController = async (req, res) => {
    await validateBody(productUpdateSchema, req.body)

    const { id } = req.params;
    const result = await productServices.updateProduct(id, req.body)
    if (!result) throw HttpException(404, `Product with id=${id} not found`)
    res.json(result)
}

export const deleteProductsByIdController = async (req, res) => {
    const { id } = req.params;
    const result = await productServices.deleteProductById(id)

    if (!result) throw HttpException(404, `Product with id=${id} not found`)
    res.json(result)
}