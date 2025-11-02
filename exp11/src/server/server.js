import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Schema & model
const feedbackSchema = new mongoose.Schema({
  name: String,
  comment: String,
});
const Feedback = mongoose.model("Feedback", feedbackSchema);

// Routes
app.post("/api/feedback", async (req, res) => {
  const { name, comment } = req.body;
  const newFeedback = new Feedback({ name, comment });
  await newFeedback.save();
  res.json({ message: "Feedback saved!" });
});

app.get("/api/feedback", async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
