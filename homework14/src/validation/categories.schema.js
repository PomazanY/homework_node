import * as Yup from "yup"

export const categoryAddSchema= Yup.object({
    name: Yup.string().required(),
    description: Yup.string().required()
})
