const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sqlite3 = require("sqlite3").verbose();

const router = express.Router();
const db = new sqlite3.Database("../database.sqlite");
const SECRET_KEY = "your_secret_key";

// Admin login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.get("SELECT * FROM users WHERE username = ?", [username], (err, user) => {
    if (err) return res.status(500).send("Database error");
    if (!user) return res.status(401).send("Invalid credentials");

    const isPasswordValid = bcrypt.compareSync(password, user.password_hash);
    if (!isPasswordValid) return res.status(401).send("Invalid credentials");

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  });
});

// Get all messages
router.get("/messages", (req, res) => {
  db.all("SELECT * FROM messages ORDER BY created_at DESC", [], (err, rows) => {
    if (err) return res.status(500).send("Database error");
    res.json(rows);
  });
});

// Mark a message as read
router.put("/messages/:id/read", (req, res) => {
  const { id } = req.params;

  db.run("UPDATE messages SET is_read = 1 WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).send("Database error");
    res.json({ updated: this.changes });
  });
});

// Mark a message as important
router.put("/messages/:id/important", (req, res) => {
  const { id } = req.params;

  db.run("UPDATE messages SET is_important = 1 WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).send("Database error");
    res.json({ updated: this.changes });
  });
});

// Delete a message
router.delete("/messages/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM messages WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).send("Database error");
    res.json({ deleted: this.changes });
  });
});

module.exports = router;
