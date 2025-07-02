const express = require("express");
const router = express.Router();

let menu = [];
let nextId = 1;

router.get("/", (req, res) => {
  res.json(menu);
});

router.post("/", (req, res) => {
  const { name, price } = req.body;
  const newItem = { id: nextId++, name, price };
  menu.push(newItem);
  res.status(201).json(newItem);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  menu = menu.filter((item) => item.id !== id);
  res.json({ message: "Item deleted" });
});

module.exports = router;
