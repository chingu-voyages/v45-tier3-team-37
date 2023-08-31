import connectMongoDB from "@/lib/mongodb";
import { addFavoriteApiInput, deleteFavoriteApiInput } from "@/lib/schemas";
import Favorite from "@/models/favorite";
import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import type { User as ClerkUser } from "@clerk/nextjs/api";

export async function POST(request: NextRequest) {
  const userClerk: ClerkUser | null = await currentUser();

  try {
    const { identifier, cover, title, description, price } =
      addFavoriteApiInput.parse(await request.json());
    await connectMongoDB();

    const favorite = await Favorite.create({
      identifier,
      cover,
      title,
      description,
      price,
    });

    return NextResponse.json(favorite);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message); // Known error type
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error("An unknown error has occurred:", error);
    }
  }
}

export async function DELETE(request: Request) {
  const userClerk: ClerkUser | null = await currentUser();
  try {
    const { identifier } = deleteFavoriteApiInput.parse(await request.json());
    await connectMongoDB();

    const favorite = await Favorite.findOneAndDelete({
      _id: userClerk?.id,
      identifier: identifier,
    });
    if (!favorite) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Favorite deleted" });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message); // Known error type
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error("An unknown error has occurred:", error);
    }
  }
}
