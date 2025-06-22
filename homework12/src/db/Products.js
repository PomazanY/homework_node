import { Schema, model } from "mongoose";


const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true
    }
})

const Product = model("product", productSchema)

export default Product;