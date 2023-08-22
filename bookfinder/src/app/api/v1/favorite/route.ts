import connectMongoDB from "@/lib/mongodb";
import { addFavoriteApiInput, deleteFavoriteApiInput } from "@/lib/schemas";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import type { User as ClerkUser } from "@clerk/nextjs/api";

export async function POST(request: NextRequest) {
  const userClerk: ClerkUser | null = await currentUser();

  try {
    const { identifier, cover, title, description } = addFavoriteApiInput.parse(
      await request.json(),
    );
    await connectMongoDB();

    const user = await User.findOne({
      _id: userClerk?.id,
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    user.favorites.push({
      identifier,
      cover,
      title,
      description,
    });

    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message); // Known error type
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

    const user = await User.findOne({
      _id: userClerk?.id,
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const favorites = user.favorites.filter(
      (favorite) => favorite.identifier !== identifier,
    );

    user.favorites = favorites;
    await user.save();

    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message); // Known error type
    } else {
      console.error("An unknown error has occurred:", error);
    }
  }
}
