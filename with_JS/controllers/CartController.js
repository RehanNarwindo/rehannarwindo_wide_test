const { Cart, Product } = require("../models/index");

class CartController {
    static async getCart(req, res, next) {
        try {
            const queryOptions = {
                where: {
                    UserId: req.user.id,
                },
                include: {
                    model: Product,
                },
            };
            const result = await Cart.findAll(queryOptions);

            res.status(200).json(result);
        } catch (error) {
            console.log(error);

            next(error);
        }
    }
    static async addCart(req, res, next) {
        try {
            const { ProductId, type, quatity } = req.body;
            if (!ProductId) {
                throw { name: "ProductIdRequired" };
            }
            const haveInCart = await Cart.findOne({
                where: {
                    ProductId,
                    UserId: req.user.id,
                },
            });

            const product = await Product.findOne({ where: { id: ProductId } });
            if (!product) {
                throw { name: "ProductNotFound" };
            }

            if (haveInCart) {
                haveInCart.quatity += quatity;
                haveInCart.total = haveInCart.quatity * product.price;
                await haveInCart.save();

                res.status(200).json(haveInCart);
            } else {
                const newCart = {
                    ProductId: product.id,
                    type: type,
                    quatity: quatity,
                    total: product.price * quatity,
                    UserId: req.user.id,
                };
                const result = await Cart.create(newCart);

                res.status(201).json(result);
            }
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = CartController;
