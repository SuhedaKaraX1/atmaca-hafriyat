import mongoose from "mongoose"

const MONGODB_URI = process.env.DATABASE_URL || "mongodb://localhost:27017/atmaca-hafriyat"

export async function connectMongo() {
  if (mongoose.connection.readyState >= 1) return

  return mongoose.connect(MONGODB_URI)
}