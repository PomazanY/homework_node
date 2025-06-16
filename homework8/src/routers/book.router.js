import { Router } from "express";
import { getBookController, addBookController, updateBookController, deleteBookController } from "../controllers/book.controller.js";

const booksRouter = Router()

booksRouter.get("/", getBookController)
booksRouter.post("/", addBookController)
booksRouter.put("/:id", updateBookController)
booksRouter.delete("/:id", deleteBookController)

export default booksRouter