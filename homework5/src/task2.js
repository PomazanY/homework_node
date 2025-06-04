import * as fs from "node:fs/promises";
import path from "node:path";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const pathToError = path.resolve("src", "errors.log")

app.use(async(req, res, next)=>{
    try{
        throw new Error("Test error for logging");
    }
    catch(err){
        console.log(err);
    }
    await fs.appendFile(pathToError, err.message)
    res.status(500).setHeader("Content-Type", "text/plain").send("Internal Server Error")
    next()
})

app.listen(3100, ()=> console.log("Server running on port 3100"))