import express from "express";
const app = express();
import bodyParser from "body-parser";
// import mainRoutes from "./src/routes/mainRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import listRoutes from "./src/routes/listRoutes.js";
import cors from "cors";

app.use(cors());
app.use(bodyParser.json());

// app.use("", mainRoutes);

app.use("/user", userRoutes);

app.use("/list", listRoutes);

// app.use("", taskRoutes);

app.listen(3100, () => {
  console.log("Servidor corriendo");
});
