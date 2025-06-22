import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json())

let products = [
    { id: 1, name: 'Product One', price: 29.99 },
    { id: 2, name: 'Product Two', price: 49.99 },
];

app.get("/products", (req, res)=>{
    res.json(products)
})

app.get("/products/:id", (req, res)=>{
    const {id} = req.params;
    const result = products.find(item => item.id === Number(id));
    if(!result){
        return res.status(404).json({
            message: `product witn id=${id} not found`
        })
    }
    res.json(result)
})

app.post("/products", (req, res)=>{
    const id = products[products.length - 1].id +1;
    const newProduct = {...req.body, id}

    products.push(newProduct);
    res.status(201).json(newProduct)
})


app.listen(3000, ()=> console.log("Server running on port 3000"))