"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here belong to user
            Cart.belongsTo(models.User, {
                foreignKey: "UserId",
            });
            Cart.belongsTo(models.Product, {
                foreignKey: "ProductId",
            });
        }
    }
    Cart.init(
        {
            ProductId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: { msg: "product Id required" },
                    notNull: { msg: "product Id required" },
                },
            },
            type: { type: DataTypes.STRING, allowNull: false },
            quatity: { type: DataTypes.INTEGER, allowNull: false },
            total: { type: DataTypes.INTEGER, allowNull: false },
            UserId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: { msg: "User Id required" },
                    notNull: { msg: "User Id required" },
                },
            },
        },
        {
            sequelize,
            modelName: "Cart",
        }
    );
    return Cart;
};
