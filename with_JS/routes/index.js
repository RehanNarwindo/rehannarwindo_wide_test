const express = require("express");
const UserController = require("../controllers/UserController");
const ProductController = require("../controllers/ProductController");
const authentication = require("../middlewares/authentication");
const errorHandler = require("../middlewares/errorhandler");
const CartController = require("../controllers/CartController");
const route = express.Router();

route.post("/register", UserController.register);
route.post("/login", UserController.login);
route.use(authentication);
route.get("/products", ProductController.getAll);
route.get("/cart", CartController.getCart);
route.post("/cart", CartController.addCart);

route.use(errorHandler);
module.exports = route;
