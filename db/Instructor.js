module.exports = function (sequelize, DataTypes) {
  const Instructor = sequelize.define('Instructor', {
    instructor_id: { type: DataTypes.INTEGER(3).ZEROFILL, autoIncrement: true, primaryKey: true },
    first_name: { type: DataTypes.CHAR(25), allowNull: false },
    last_name: { type: DataTypes.CHAR(25), allowNull: false },
    instructor_email: { type: DataTypes.CHAR(30), unique: true, allowNull: false },
    // instructor_department: { type: DataTypes.CHAR(3), references: { model: 'Department', foreignKey: 'department_code' } },
    // FOREIGN KEY (instructor_department) REFERENCES Department (department_code)
  });

  Instructor.associate = function (db) {
    Instructor.belongsTo(db.Department, {
      foreignKey: 'department_code',
    });
  };

  return Instructor;
};
