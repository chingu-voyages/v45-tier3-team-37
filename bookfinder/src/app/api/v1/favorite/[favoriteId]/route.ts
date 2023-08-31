import connectMongoDB from "@/lib/mongodb";
import Favorite from "@/models/favorite";
import { currentUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import type { User as ClerkUser } from "@clerk/nextjs/api";

export async function GET(
  request: NextRequest,
  { params }: { params: { favoriteId: string } },
) {
  const { favoriteId } = await params;
  const userClerk: ClerkUser | null = await currentUser();
  if (!userClerk) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectMongoDB();

    const favorites = await Favorite.findOne({
      userId: userClerk?.id,
      id: favoriteId,
    });

    return NextResponse.json(favoriteId);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error); // Known error type
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error("An unknown error has occurred:", error);
    }
  }
}
