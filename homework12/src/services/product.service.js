import Product from "../db/Products.js"

export const getProduct = ()=> Product.find();
export const getProductById = (_id)=> Product.findById(_id);
export const addProduct = payload => Product.create(payload);
export const updateProduct = (id, payload)=> Product.findByIdAndUpdate(id, payload, {new: true})
export const deleteProductById = id => Product.findByIdAndDelete(id)