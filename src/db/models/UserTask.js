import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import List from "./List.js";
import User from "./User.js";

const UserTask = sequelize.define(
  "UserTask",
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
    tableName: "user_task",
    timestamps: false,
  }
);

export default UserTask;

// List.belongsToMany(User, { through: UserTask, foreignKey: "list_id" });
// User.belongsToMany(List, { through: UserTask, foreignKey: "user_id" });
