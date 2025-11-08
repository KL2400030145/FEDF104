import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI;

// Maintain a cached connection across hot reloads in development
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// We'll define these and export at the end. Avoid using `export` inside blocks
// because `export` declarations must be at the top-level.
let connectDB;
let Feedback;

if (!MONGO_URI) {
  // Simple in-memory fallback for local development/tests when no MongoDB URI
  // is provided. This keeps the API usable without requiring a running MongoDB.
  const store = [];

  connectDB = async function () {
    // no-op when not using MongoDB
    return Promise.resolve(null);
  };

  Feedback = {
    async create(doc) {
      const item = {
        _id: (store.length + 1).toString(),
        text: doc.text,
        createdAt: doc.createdAt || new Date(),
      };
      store.push(item);
      return item;
    },
    find() {
      // return an object supporting .sort() like a mongoose query
      return {
        sort({ createdAt } = { createdAt: -1 }) {
          const copy = [...store];
          copy.sort((a, b) => (createdAt === -1 ? b.createdAt - a.createdAt : a.createdAt - b.createdAt));
          return Promise.resolve(copy);
        },
      };
    },
  };
} else {
  // Real MongoDB-backed implementation
  connectDB = async function () {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
      cached.promise = mongoose
        .connect(MONGO_URI, { dbName: "fedf_feedback" })
        .then((mongoose) => mongoose);
    }
    cached.conn = await cached.promise;
    return cached.conn;
  };

  const feedbackSchema = new mongoose.Schema(
    { text: String, createdAt: { type: Date, default: Date.now } },
    { collection: "feedbacks" }
  );

  Feedback = mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);
}

export { connectDB, Feedback };
