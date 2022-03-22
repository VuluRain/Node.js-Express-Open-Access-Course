const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan= require('morgan');
const path = require('path');
const productRouter = express.Router();
const res = require('express/lib/response');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")))

app.set("views","./src/views");
app.set("view engine","ejs")

productRouter.route("/").get((req, res) => {
    res.render("products",{
        products: [
            {productTitle: 'Dish_Washer_A', productDescription: 'DW_Grade=A', productPrice: 100},
            {productTitle: 'Dish_Washer_B', productDescription: 'DW_Grade=B', productPrice: 80},
            {productTitle: 'Dish_Washer_C', productDescription: 'DW_Grade=C', productPrice: 60},
            {productTitle: 'Dish_Washer_D', productDescription: 'DW_Grade=D', productPrice: 45},
        ],
    });
});

productRouter.route("/1").get((req, res) => {
    res.send("Hello World !! I'm Product 1");
});

app.use("/products", productRouter)

app.get("/", (req,res) => {

    res.render('index',{username: 'VulpesSavior', customers: ['Kitty','Arrum','Gash']});

})

app.listen(PORT, () => {
    debug("Listening on port " + chalk.green(PORT));
})