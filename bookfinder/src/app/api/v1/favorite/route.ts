import connectMongoDB from "@/lib/mongodb";
import { addFavoriteApiInput, deleteFavoriteApiInput } from "@/lib/schemas";
import { Favorite } from "@/models/favorite";
import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import type { User as ClerkUser } from "@clerk/nextjs/api";

export async function POST(request: NextRequest) {
  const userClerk: ClerkUser | null = await currentUser();

  if (!userClerk) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { identifier, cover, title, author, description, price, seller } =
      addFavoriteApiInput.parse(await request.json());
    await connectMongoDB();

    const favorite = await Favorite.create({
      identifier,
      userId: userClerk?.id,
      cover,
      title,
      author,
      description,
      price,
      seller,
    });

    return NextResponse.json({ message: "Your choice has been saved!", favorite });
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

  console.log('USERRR',userClerk);
  

  try {
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
