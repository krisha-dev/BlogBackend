// controllers/authController.js

const jwt = require("jsonwebtoken");

const users = []; // In-memory users list

const generateToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const registerUser = (req, res) => {
  const { email, password } = req.body;

  const exists = users.find((u) => u.email === email);
  if (exists) return res.status(400).json({ message: "User already exists" });

  users.push({ email, password });
  const token = generateToken(email);

  res.status(201).json({ email, token });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken(email);
  res.status(200).json({ email, token });
};

module.exports = {
  loginUser,
  registerUser,
};

// Debug: Make sure both functions are correctly exported
console.log("✅ Auth Controller Loaded:", {
  loginUser: typeof loginUser,
  registerUser: typeof registerUser,
});
