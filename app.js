const express = require("express");
const mongoose = require("mongoose");
const Item = require("./models/Item");
const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));



mongoose
  .connect("mongodb://db-user-s1:db-pass-s1@51.77.210.239:27017/db-s1", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error = ",err));

  

const calculate = require('./calculate')

app.get("/", (req, res) => {
  res.send("Hello Devops - session 1 - new ...");
});

app.post("/sum", (req, res) => {
  const { a, b } = req.body
  res.status(201).send({ sum: calculate.sum(a, b) })
});


app.post("/multiple", (req, res) => {
  const { a, b } = req.body
  res.status(201).send({ multiple: calculate.multiple(a, b) })
});

app.get("/items", (req, res) => {
  Item.find()
    .then((items) => res.send({ items }))
    .catch((err) => res.status(500).json({ err }));
});

app.post("/items/add", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem
    .save()
    .then((item) => res.send({ message: "item saved successfully", item }))
    .catch((err) => res.status(500).json({ err }));
});




const port = 3000;

app.listen(port, () => console.log("Server running on port 3000"));

//mongodb://user:pass@51.77.210.239:27017/mydb