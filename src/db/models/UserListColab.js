import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import List from "./List.js";
import User from "./User.js";

const UserListColab = sequelize.define(
  "UserListColab",
  {
    list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "user_list_colab",
    timestamps: false,
  }
);

export default UserListColab;

// List.belongsToMany(User, { through: UserListColab, foreignKey: "user_id" });
// User.belongsToMany(List, { through: UserListColab, foreignKey: "user_id" });
