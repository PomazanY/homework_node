import express, { Application, Request, Response } from "express"
import cors from "cors"

const startServer = ():void=>{
    const app:Application = express()

    app.use(cors())
    app.use(express.json())

    app.get("/", (req: Request, res: Response): void=>{
        res.json({
            message: "Hello world!"
        })
    })

    app.post("/", (req: Request, res: Response): void=>{
        if(!req.body){
            res.status(400).json({
                message: "Error, status 400"
            })
        }
        res.status(201).json(req.body);
    })

    const port: number = Number(process.env.PORT) || 3000
    app.listen(port, ()=> console.log(`Server running on ${port} port`))

}
export default startServer;