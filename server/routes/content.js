const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const router = express.Router();
const db = new sqlite3.Database("../database.sqlite");

// Get all content
router.get("/", (req, res) => {
  db.all("SELECT * FROM content", [], (err, rows) => {
    if (err) return res.status(500).send("Database error");
    res.json(rows);
  });
});

// Update content
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { section_name, content } = req.body;

  db.run(
    "UPDATE content SET section_name = ?, content = ? WHERE id = ?",
    [section_name, content, id],
    function (err) {
      if (err) return res.status(500).send("Database error");
      res.json({ updated: this.changes });
    }
  );
});

module.exports = router;
