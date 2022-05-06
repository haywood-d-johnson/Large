"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Businesses", {
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
            title: {
                allowNull: false,
                type: Sequelize.STRING(50),
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            address: {
                allowNull: false,
                type: Sequelize.STRING(100),
            },
            city: {
                allowNull: false,
                type: Sequelize.STRING(50),
            },
            state: {
                allowNull: false,
                type: Sequelize.STRING(25),
            },
            zip: {
                allowNull: false,
                type: Sequelize.STRING(10),
            },
            lat: {
                // allowNull: pulling from address only works with Google API. not free
                type: Sequelize.DECIMAL,
            },
            lng: {
                // allowNull: pulling from address only works with Google API. not free
                type: Sequelize.DECIMAL,
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
        return queryInterface.dropTable("Businesses");
    },
};
