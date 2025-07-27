import { Schema, model } from "mongoose";


const magazineSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    issueNumber: {
        type: String,
        required: true,
        minlength: 2,
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: "publisher",
        required: true,
    },
    
}, { versionKey: false, timestamps: true });

const Magazine = model("magazine", magazineSchema)

export default Magazine;