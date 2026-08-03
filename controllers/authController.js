import validator from "validator";
import { getDBConnection } from "../db/db.js";
import bcrypt from "bcryptjs";

export async function registerUser(req, res) {
  let { name, email, username, password } = req.body;

  if (!name || !email || !username || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  name = name.trim();
  email = email.trim();
  username = username.trim();

  if (!/^[a-zA-Z0-9_-]{1,20}$/.test(username)) {
    return res.status(400).json({
      error:
        "Username must be 1–20 characters, using letters, numbers, _ or -.",
    });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  try {
    const db = await getDBConnection();

    const existing = await db.get(
      `SELECT id FROM users WHERE email = ? AND username = ?`,
      [email, username],
    );

    if (existing) {
      res.status(409).json({ error: "user already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const result = await db.run(
      `
            INSERT INTO users (name, email, username, password)
            VALUES(?, ?, ?, ?)`,
      [name, email, username, hashed],
    );

    req.session.userId = result.lastID;

    res.status(201).json({ message: "user succesfully registered" });
  } catch (err) {
    console.error("registation error", err.message);
    res.status(500).json({ error: "registation error, please try again" });
  }
}

export async function loginUser(req, res) {
  let { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "missing username or password" });
  }

  username = username.trim();

  try {
    const db = await getDBConnection();

    const user = await db.get(`SELECT * FROM users WHERE username = ?`, [username]);

    if (!user) {
      res
        .status(401)
        .json({ error: "user not found please try again or register" });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      res.status(401).json({ error: "invalid credentials" });
    }

    req.session.userId = user.id;
    res.json({ message: "user logged in" });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ error: "Login failed. Please try again." });
  }
}

export async function logoutUser(req, res) {
    req.session.destroy(() => {
      res.json({ message: 'user logged out'})
    })
}
