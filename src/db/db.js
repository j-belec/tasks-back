import { Sequelize } from "sequelize";

const sequelize = new Sequelize("tasks_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;

// import User from "./models/User.js";
// import List from "./models/List.js";
// import UserListColab from "./models/UserListColab.js";
// import UserTask from "./models/UserTask.js";
// import Task from "./models/Task.js";

// //user
// User.hasMany(List, { foreignKey: "user_id" });

// //list
// List.belongsTo(User, { foreignKey: "user_id" });
// List.hasMany(List, { foreignKey: "list_id" });

// //userlistcolab
// List.belongsToMany(User, { through: UserListColab, foreignKey: "user_id" });
// User.belongsToMany(List, { through: UserListColab, foreignKey: "user_id" });

// //task
// Task.belongsTo(List, { foreignKey: "list_id" });

// //usertask
// List.belongsToMany(User, { through: UserTask, foreignKey: "list_id" });
// User.belongsToMany(List, { through: UserTask, foreignKey: "user_id" });

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Tablas sincronizadas");
//   })
//   .catch((error) => {
//     console.error("Error sincronizando las tablas:", error);
//   });
