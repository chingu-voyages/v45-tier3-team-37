import connectMongoDB from "@/lib/mongodb";
import { addFavoriteApiInput } from "@/lib/schemas";
import { Favorite } from "@/models/favorite";
import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import type { User as ClerkUser } from "@clerk/nextjs/api";
import mongoose from "mongoose";

export async function POST(request: NextRequest) {
  const userClerk: ClerkUser | null = await currentUser();

  if (!userClerk) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const {
      identifier,
      cover,
      title,
      author,
      description,
      sellerName,
      sellerBookId,
      price,
      bookUrl,
    } = addFavoriteApiInput.parse(await request.json());
    if (!mongoose.connection.readyState) await connectMongoDB();

    let favorite = await Favorite.findOne({
      userId: userClerk?.id,
      identifier,
    });

    if (!favorite) {
      favorite = await Favorite.create({
        identifier,
        userId: userClerk?.id,
        cover,
        title,
        author,
        seller: [
          {
            sellerName,
            sellerBookId,
            price,
            bookUrl,
          },
        ],
        description,
      });
      return NextResponse.json({
        message: "Your choice has been saved!",
        favorite,
      });
    }

    favorite.seller.push({
      sellerName,
      sellerBookId,
      price,
      bookUrl,
    });

    await favorite.save();

    return NextResponse.json({
      message: "Your choice has been saved!",
      favorite,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error); // Known error type
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error("An unknown error has occurred:", error);
    }
  }
}
export async function GET(request: NextRequest) {
  const userClerk: ClerkUser | null = await currentUser();
  if (!userClerk) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    if (!mongoose.connection.readyState) await connectMongoDB();

    const favorites = await Favorite.find({
      userId: userClerk?.id,
    });

    return NextResponse.json(favorites);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error); // Known error type
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error("An unknown error has occurred:", error);
    }
  }
}
