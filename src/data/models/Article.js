module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "articles",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      tableName: "articles",
    }
  );

  return Article;
};
