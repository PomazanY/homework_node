import Book from "../db/Book.js";

export const getBooks = ()=> Book.findAll();
export const addBooks = payload => Book.create(payload);
export const updateBook = (id)=> Book.findByPk(id);
export const deleteBook = (id)=> Book.findByPk(id);