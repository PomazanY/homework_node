import { Schema, model } from "mongoose";


const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description:{
        type: String,
        required: true
    }
})

const Category = model("category", categorySchema)

export default Category;