import { Schema, model } from "mongoose";


const articleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    articles: {
        type: Schema.Types.ObjectId,
        ref: "tag",
        required: true,
    },
    
}, { versionKey: false, timestamps: true });

const Article = model("article", articleSchema)

export default Article;