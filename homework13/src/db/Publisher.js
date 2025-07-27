import { Schema, model } from "mongoose";


const publisherSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        country: {
            type: String,
            required: true,
            minlength: 2,
        },
        city: {
            type: String,
            required: true,
            minlength: 2,
        },
        street: {
            type: String,
            required: true,
            minlength: 2,
        },
        building: {
            type: String,
            required: true,
        },
        postalCode: {
            type: String,
            required: false,
            match: postalCodeValidation.value,
        },
    },
}, { versionKey: false, timestamps: true });

const Publisher = model("publisher", publisherSchema)

export default Publisher;