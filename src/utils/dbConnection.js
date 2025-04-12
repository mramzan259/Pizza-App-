import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI; // Load from .env

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing from environment variables!");
}

let cached = global.mongoose; // Global cache to prevent multiple connections

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    console.log("already connected");
    return cached.conn; // Return existing connection if available
  }

  try {
    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGODB_URI);
    }

    cached.conn = await cached.promise;
    console.log("✅ MongoDB Connected!");
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error("❌ MongoDB Connection Error:", error);
    throw error;
  }
}
