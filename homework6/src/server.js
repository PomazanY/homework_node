import express from "express";
import cors from "cors";
import * as Yup from "yup";

import Product from "./db/Product.js";

const productAddSchema = Yup.object({
    name: Yup.string().required(),
    price: Yup.number().min(0).required(),
});

const productUpdateSchema = Yup.object({
    name: Yup.string(),
    price: Yup.number().min(0),
})

const startServer = () => {
    const app = express();
    app.use(cors());
    app.use(express.json())

    app.get("/api/products", async (req, res) => {
        const result = await Product.findAll();
        res.json(result)
    })

    app.get("/api/products/:id", async (req, res) => {
        const { id } = req.params
        const result = await Product.findByPk(id);

        if (!result) {
            return res.status(404).json({
                message: `product with id=${id} not found`
            })
        }
        res.json(result);
    })

    app.post("/api/products", async (req, res) => {
        try {
            await productAddSchema.validate(req.body)
            const result = await Product.create(req.body)
            res.status(201).json(result)
        }
        catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    })

    app.put("/api/products/:id", async (req, res) => {
        try {
            await productUpdateSchema.validate(req.body)
            const { id } = req.params;

            const result = await Product.findByPk(id)
            if (!result) {
                return res.status(404).json({
                    message: `product with id=${id} not found`
                })
            }
            await result.update(req.body);
            res.json(result)
        }
        catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    })

    app.delete("/api/products/:id", async (req, res) => {
        const { id } = req.params;
        const result = await Product.findByPk(id)
        if(!result){
            return res.status(404).json({
                message: `product with id=${id} not found`
            })
        }
        await result.destroy()
        res.json(result)
    })


    const port = process.env.PORT || 3000
    app.listen(port, () => console.log("Server running on 3000 port"))


}
export default startServer;

