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
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: "category",
        required: true,
    }
})

const Product = model("product", productSchema)

export default Product;