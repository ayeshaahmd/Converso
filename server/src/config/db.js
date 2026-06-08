import mongoose from "mongoose";

export async function connectDb(mongoUri) {
  mongoose.set("strictQuery", true);
  try {
    console.log(`[DB] Attempting to connect to MongoDB at ${mongoUri}...`);
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 10000 });
    console.log("[DB] Connected to MongoDB successfully.");
  } catch (error) {
    console.error("[DB] Failed to connect to MongoDB:", error.message);
    console.error("[DB] Please ensure MongoDB is running and MONGO_URI is correctly configured.");
    throw error;
  }
}

