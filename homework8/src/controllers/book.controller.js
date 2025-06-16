import * as booksServices from "../services/books.service.js"

import { bookSchema } from "../validation/books.schema.js";
import validateBody from "../utils/validateBody.js"

export const getBookController = async (req, res) => {
    const result = await booksServices.getBooks();
    res.json(result)
}

export const addBookController = async (req, res) => {
    await validateBody(bookSchema, req.body)
    const result = await booksServices.addBooks(req.body);
    res.status(201).json(result)
}

export const updateBookController = async (req, res) => {
    const { id } = req.params;
    const result = await booksServices.updateBook(id)
    await result.update(req.body)
    res.json(result)
}

export const deleteBookController = async (req, res) => {
    const { id } = req.params;
    const result = await booksServices.deleteBook(id)
    await result.destroy();
    res.json(result)
}