const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/reservations.json");

// GET reservations
router.get("/", (req, res) => {
  const reservations = JSON.parse(fs.readFileSync(dataPath));
  res.json(reservations);
});

// POST new reservation
router.post("/", (req, res) => {
  const reservations = JSON.parse(fs.readFileSync(dataPath));
  const newReservation = {
    id: reservations.length + 1,
    name: req.body.name,
    table: req.body.table,
    time: req.body.time
  };

  reservations.push(newReservation);
  fs.writeFileSync(dataPath, JSON.stringify(reservations, null, 2));
  res.status(201).json(newReservation);
});

module.exports = router;
