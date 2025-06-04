import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.put("/", (req, res, next) => {
    res.status(200).send("PUT-запрос обработан").setHeader("Content-Type", "text/plain");
    next()
});
app.delete("/", (req, res) => {
    res.status(200).send("DELETE-запрос обработан").setHeader("Content-Type", "text/plain");
    next()
});


app.listen(3800, () => console.log("Server running on 3800 port"))