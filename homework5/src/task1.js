import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    const { authorization } = req.headers;

    if (!authorization) {
        res.setHeader("Content-Type", "text/plain")
        return res.status(401).send("Unauthorized");
    }
    res.setHeader("Content-Type", "text/plain");
    console.log(authorization, "Authorization is rigth");
    res.status(200).send("Authorization header received");
    
})

app.listen(3000, () => console.log("Server running on 3000 port"))
