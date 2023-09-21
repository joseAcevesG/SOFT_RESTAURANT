// Main dependencies
const express = require("express");
const listEndpoints = require("express-list-endpoints");
const routes = require("./src/utils/router");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Create Express app
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Assuming routes is an Express Router object
app.use("/", routes); // Use the routes as middleware

app.get("/", (req, res) => {
  res.send("Ruta default / ");
});

app.get("*", function (req, res) {
  res.send("Pagina no Encontrada!");
});

//Mongoose connection
mongoose.connect(process.env.MONGO_URL);

const mongoUrl = process.env.MONGO_URL;

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Connected to database (MongoDB)");
  })
  .catch((err) => {
    console.log("Not connected to the database", err);
  });

const endpoints = listEndpoints(app);
console.log("List of registered routes:");
endpoints.forEach((endpoint) => {
  console.log(`${endpoint.methods.join(", ")} ${endpoint.path}`);
});

// Start server
const server = app.listen(port, () => {
  console.log("Server started at port: " + port);
});
