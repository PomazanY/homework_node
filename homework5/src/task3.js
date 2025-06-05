import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.put("/", (req, res, next) => {
    res.status(200).setHeader("Content-Type", "text/plain").send("PUT-запрос обработан");
    next()
});
app.delete("/", (req, res) => {
    res.status(200).setHeader("Content-Type", "text/plain").send("DELETE-запрос обработан");
    next()
});


app.listen(3800, () => console.log("Server running on 3800 port"))