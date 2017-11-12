module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
    });
    console.log('USER');
    return User;
}