export default (sequelize, DataTypes) => {
  return sequelize.define('Course', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    duration: { type: DataTypes.STRING },
  });
};
