import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema(
  {
    identifier: { type: String, required: true },
    userId: { type: String, required: true },
    cover: { type: String },
    title: { type: String, required: true },
    author: { type: Array, required: true },
    seller: [
      {
        sellerName: { type: String, required: true },
        sellerBookId: { type: String, required: true },
        price: { type: Number },
        bookUrl: { type: String, required: true },
      },
    ],
    description: { type: String },
  },
  { timestamps: true },
);

export const Favorite =
  mongoose.models.Favorite || mongoose.model("Favorite", favoriteSchema);
