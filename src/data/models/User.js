module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
      userName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: false,
      },
      socketToken: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },

      role: {
        type: DataTypes.ENUM("admin", "user", "doctor"),
        allowNull: true,
        defaultValue: "user",
      },

      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      tableName: "users",
    }
  );

  return User;
};
