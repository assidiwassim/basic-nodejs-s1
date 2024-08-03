const express = require("express");
const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const calculate = require('./calculate')

app.get("/", (req, res) => {
  res.send("Hello Devops - session 1 - 56 ");
});

app.post("/sum", (req, res) => {
  const { a, b } = req.body
  res.status(201).send({ sum: calculate.sum(a, b) })
});


app.post("/multiple", (req, res) => {
  const { a, b } = req.body
  res.status(201).send({ multiple: calculate.multiple(a, b) })
});


const port = 3000;

app.listen(port, () => console.log("Server running on port 3000"));