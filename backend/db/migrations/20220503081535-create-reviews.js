"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("Reviews", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: "Users" },
            },
            businessId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: "Businesses" },
            },
            rating: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            answer: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("now"),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("now"),
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Reviews");
    },
};
