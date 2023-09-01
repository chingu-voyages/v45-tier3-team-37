import mongoose from "mongoose";

export default async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect to MongoDB");
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message); // Known error type
    } else {
      console.error("An unknown error has occurred:", error);
    }
  }
}
