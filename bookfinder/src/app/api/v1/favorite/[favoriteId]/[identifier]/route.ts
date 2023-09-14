import connectMongoDB from "@/lib/mongodb";
import { Favorite } from "@/models/favorite";
import { currentUser } from "@clerk/nextjs/server";
import type { User as ClerkUser } from "@clerk/nextjs/api";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { favoriteId: string; sellerBookId: string } },
) {
  const { favoriteId, sellerBookId } = await params;
  const userClerk: ClerkUser | null = await currentUser();
  if (!userClerk) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    if (!mongoose.connection.readyState) await connectMongoDB();

    let favorite = await Favorite.findById(favoriteId);

    if (!favorite) {
      return NextResponse.json(
        { error: "Favorite not found" },
        { status: 404 },
      );
    }

    const sellers = favorite.seller.filter(
      (seller) => seller.sellerBookId !== sellerBookId,
    );
    favorite.seller = sellers;

    await favorite.save();

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
