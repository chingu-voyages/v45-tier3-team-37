import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    email: { type: String, required: true },
    favorites: {
      type: [
        {
          identifier: { type: String, required: true },
          cover: { type: String },
          title: { type: String, required: true },
          description: { type: String },
          price: { type: Number },
        },
      ],
      default: [],
    },
  },
  { timestamps: true },
);

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

const User = mongoose.model("User", userSchema);

export default User;
