module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
    // id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: DataTypes.STRING,
  });
  return User;
};
