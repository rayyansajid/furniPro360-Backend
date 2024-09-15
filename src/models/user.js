const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/pgSqlConfig");

const User = sequelize.define("user", {
  user_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: DataTypes.ENUM("male", "female"),
    defaultValue: "male",
    allowNull: false,
  },
  user_role: {
    type: DataTypes.ENUM("customer", "supplier", "admin"),
    allowNull: false,
    defaultValue: "customer",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    //unique: true,
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
