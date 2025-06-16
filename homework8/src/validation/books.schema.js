import * as Yup from "yup";

export const bookSchema = Yup.object({
    title: Yup.string().trim().required('Title is required'),
    author: Yup.string().trim().required('Author is required'),
    year: Yup.number().integer().positive().required('Year is required')
})