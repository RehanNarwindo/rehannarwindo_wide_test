const { Product } = require("../models/index");

class ProductController {
    static async getAll(req, res, next) {
        try {
            console.log("masuk get all");
            // pagination
            let { page, limit } = req.query;
            console.log(page, limit);

            page = Number(page) || 1;
            limit = Number(limit) || 2;

            let queryOption = {
                limit: limit,
                offset: (page - 1) * limit,
            };
            console.log(queryOption);

            const { count, rows } = await Product.findAndCountAll(queryOption);
            console.log(count, rows);
            const result = {
                total: count,
                size: limit,
                totalPage: Math.ceil(count / limit),
                currentPage: page,
                data: rows,
            };
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ProductController;
