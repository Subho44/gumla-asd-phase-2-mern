const express = require("express");

const app = express();
const products = [
    { id: 1, name: "laptop", price: 78000 },
    { id: 2, name: "tab", price: 7800 },
    { id: 3, name: "mobile", price: 700 },
    
];


app.get('/', (req, res) => {
    res.send("api is working my home page");
});

app.get('/products', (req, res) => {
    res.json(products);
});

//how can i view singel data by id
app.get("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(x => x.id === id);
    res.json(product);
});

//price greater than
app.get("/products/greater", (req, res) => {
    const { price } = req.query;
    const result = products.filter(x => x.price > Number(price));
    res.json(result);
})
const port = 5600;
app.listen(port, () => {
    console.log("server is running port 5600");
});