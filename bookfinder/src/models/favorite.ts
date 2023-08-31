import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema(
  {
    identifier: { type: String, required: true },
    userId: { type: String, required: true },
    cover: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
  },
  { timestamps: true },
);

const Favorite = mongoose.model("Favorite", favoriteSchema);

export default Favorite;
