"use strict";
module.exports = (sequelize, DataTypes) => {
    const Business = sequelize.define(
        "Business",
        {
            userId: DataTypes.INTEGER,
            title: DataTypes.STRING,
            description: DataTypes.TEXT,
            address: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            zip: DataTypes.STRING,
            lat: DataTypes.DECIMAL,
            lng: DataTypes.DECIMAL,
        },
        {}
    );
    Business.associate = function (models) {
        Business.belongsTo(models.User, { foreignKey: "userId" });
        Business.hasMany(models.Reviews, {
            foreignKey: "businessId",
            hooks: true,
            onDelete: "cascade",
        });
    };
    return Business;
};
