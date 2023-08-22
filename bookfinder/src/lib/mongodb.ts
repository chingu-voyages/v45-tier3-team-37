import mongoose from "mongoose";

export default function connectMongoDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect to MongoDB");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message); // Known error type
    } else {
      console.log("An unknown error has occurred:", error);
    }
  }
}
