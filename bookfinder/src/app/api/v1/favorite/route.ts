import connectMongoDB from "@/lib/mongodb";
import { addFavoriteApiInput, deleteFavoriteApiInput } from "@/lib/schemas";
import Favorite from "@/models/favorite";
import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import type { User as ClerkUser } from "@clerk/nextjs/api";

export async function POST(request: NextRequest) {
  const userClerk: ClerkUser | null = await currentUser();

  if (!userClerk) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { identifier, cover, title, description, price } =
      addFavoriteApiInput.parse(await request.json());
    await connectMongoDB();

    const favorite = await Favorite.create({
      identifier,
      userId: userClerk?.id,
      cover,
      title,
      description,
      price,
    });

    return NextResponse.json(favorite);
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
  console.log(userClerk.id);

  try {
    await connectMongoDB();

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

export async function DELETE(request: Request) {
  const userClerk: ClerkUser | null = await currentUser();
  if (!userClerk) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
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
      console.error(error); // Known error type
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error("An unknown error has occurred:", error);
    }
  }
}
