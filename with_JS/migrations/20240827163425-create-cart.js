"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Carts", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            ProductId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Products",
                    key: "id",
                },
            },
            type: {
                type: Sequelize.STRING,
            },
            quatity: {
                type: Sequelize.INTEGER,
            },
            total: {
                type: Sequelize.INTEGER,
            },
            UserId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Users",
                    key: "id",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Carts");
    },
};
