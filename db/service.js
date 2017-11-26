// Not used yet.
module.exports = function (sequelize, DataTypes) {
  const Service = sequelize.define('service', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
  });
  return Service;
};
