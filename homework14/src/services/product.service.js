import Product from "../db/Products.js"

export const getProduct = ()=> Product.find();
export const addProduct = payload => Product.create(payload);
