const express = require('express');
const productsRouter = express.Router();
const products = require("./../../data/products.json");

productsRouter.route("/").get((req, res) => {
    res.render("products",{
        products
    }
    );
});

productsRouter.route("/:ID").get((req, res) => {
    const id = req.params.ID;
    res.render("product",{
        product: products[id],       
    })
});

console.log("Test_Git_Desktop")

module.exports = productsRouter;
