const express = require('express');
const productsRouter = express.Router();
const products = require("./../../data/products.json");

productRouter.route("/").get((req, res) => {
    res.render("products",{
        products
    }
    );
});

productRouter.route("/:ID").get((req, res) => {
    const id = req.params.ID;
    res.render("product",{
        product: products[id],
    })
});

module.exports = productsRouter;
