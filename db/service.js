module.exports = function (sequelize, DataTypes) {
    const Service = sequelize.define('service', {
        name: DataTypes.STRING,
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
    });
    console.log('SERVICE');
    return Service;
};