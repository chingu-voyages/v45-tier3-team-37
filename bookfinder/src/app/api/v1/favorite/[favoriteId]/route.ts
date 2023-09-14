import connectMongoDB from "@/lib/mongodb";
import { Favorite } from "@/models/favorite";
import { currentUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import type { User as ClerkUser } from "@clerk/nextjs/api";
import mongoose from "mongoose";

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
    if (!mongoose.connection.readyState) await connectMongoDB();

    const favorite = await Favorite.findOne({
      userId: userClerk?.id,
      identifier: favoriteId,
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { favoriteId: string } },
) {
  const userClerk: ClerkUser | null = await currentUser();
  const { favoriteId } = await params;
  if (!userClerk) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    if (!mongoose.connection.readyState) await connectMongoDB();

    const favorite = await Favorite.findOneAndDelete({
      userId: userClerk?.id,
      _id: favoriteId,
    });
    if (!favorite) {
      return NextResponse.json(
        { error: "Favorite not found" },
        { status: 404 },
      );
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
