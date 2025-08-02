const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const adminRoutes = require("./routes/admin");
const messageRoutes = require("./routes/messages");
const contentRoutes = require("./routes/content");

const app = express();
const PORT = process.env.PORT || 5000;
const db = new sqlite3.Database("./database.sqlite");
const SECRET_KEY = "your_secret_key";

app.use(cors());
app.use(express.json());
app.use("/admin", adminRoutes);
app.use("/messages", messageRoutes);
app.use("/content", contentRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Admin login
app.post("/admin/login", (req, res) => {
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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

