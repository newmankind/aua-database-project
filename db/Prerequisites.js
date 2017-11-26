module.exports = function (sequelize, DataTypes) {
  const Prerequisites = sequelize.define('Prerequisites', {
    // course_id: { type: DataTypes.INTEGER(4).ZEROFILL, references: { model: 'Course', foreignKey: 'course_id' }, primaryKey: true },
    // course_prereq: { type: DataTypes.INTEGER(4).ZEROFILL, references: { model: 'Course', foreignKey: 'course_id' }, primaryKey: true },
    // FOREIGN KEY (course_id) REFERENCES Course(course_id),
    // FOREIGN KEY (course_prereq) REFERENCES Course(course_id),
  });

  Prerequisites.associate = function (db) {
    Prerequisites.belongsTo(db.Course, {
      foreignKey: 'course_id',
    });

    Prerequisites.belongsTo(db.Course, {
      foreignKey: 'course_id',
    });
  };

  return Prerequisites;
};
