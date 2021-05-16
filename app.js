require('dotenv').config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

hbs.registerPartials(__dirname + "/views/partials", function (err) {});

app.set("view engine", "hbs");

//static content
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Leonardo Gonzalez",
    titulo: "Curso de node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Leonardo Gonzalez",
    titulo: "Curso de node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Leonardo Gonzalez",
    titulo: "Curso de node",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
