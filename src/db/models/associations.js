import sequelize from "../db.js";
import User from "./User.js";
import List from "./List.js";
import UserListColab from "./UserListColab.js";
import UserTask from "./UserTask.js";
import Task from "./Task.js";

//user
User.hasMany(List, { foreignKey: "user_id" });

//list
List.belongsTo(User, { foreignKey: "user_id" });
List.hasMany(List, { foreignKey: "list_id" });

//userlistcolab
List.belongsToMany(User, { through: UserListColab, foreignKey: "user_id" });
User.belongsToMany(List, { through: UserListColab, foreignKey: "user_id" });

//task
Task.belongsTo(List, { foreignKey: "list_id" });

//usertask
List.belongsToMany(User, { through: UserTask, foreignKey: "list_id" });
User.belongsToMany(List, { through: UserTask, foreignKey: "user_id" });

// await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");

sequelize
  .sync()
  .then(() => {
    console.log("Tablas sincronizadas");
  })
  .catch((error) => {
    console.error("Error sincronizando las tablas:", error);
  });

export { User, List, UserListColab, Task, UserTask };
