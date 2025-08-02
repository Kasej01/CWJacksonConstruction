const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const router = express.Router();
const db = new sqlite3.Database("../database.sqlite");

// Add a new message (from the contact form)
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  db.run(
    "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
    [name, email, message],
    function (err) {
      if (err) return res.status(500).send("Database error");
      res.json({ id: this.lastID });
    }
  );
});

module.exports = router;
