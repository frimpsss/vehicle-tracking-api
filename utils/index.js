import mongoose from "mongoose";

export async function connectDB() {
  mongoose.set("strict", true);
  try {
    await mongoose.connect(process.env.DB_URI);
  } catch (error) {
    throw Error(error)
  }
}
