module.exports = function (sequelize, DataTypes) {
  const Teaches = sequelize.define('Teaches', {
    instructor_id: { type: DataTypes.INTEGER(3).ZEROFILL, references: { model: 'Instructor', foreignKey: 'instructor_id' }, primaryKey: true },
    section_id: { type: DataTypes.INTEGER(5).ZEROFILL, references: { model: 'Section', foreignKey: 'section_id' }, primaryKey: true },
    // FOREIGN KEY (instructor_id) REFERENCES Instructor(instructor_id),
    // FOREIGN KEY (section_id) REFERENCES Section(section_id),
  });

  Teaches.associate = function (db) {
    Teaches.belongsTo(db.Instructor, {
      foreignKey: 'instructor_id',
    });

    Teaches.belongsTo(db.Section, {
      foreignKey: 'section_id',
    });
  };

  return Teaches;
};
