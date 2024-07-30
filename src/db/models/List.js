import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import User from "./User.js";

const List = sequelize.define(
  "List",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    slug: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    open_tasks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    inprogress_tasks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    completed_tasks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "lists",
    timestamps: false,
  }
);

export default List;

// List.belongsTo(User, { foreignKey: "user_id" });
// List.hasMany(List, { foreignKey: "list_id" });
