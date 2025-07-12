const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require('./routes/auth');

dotenv.config({ quiet: true });
const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // Only needs to be called once

// ✅ Routes
app.use('/api/auth', authRoutes);

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
