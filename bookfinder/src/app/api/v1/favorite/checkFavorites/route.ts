import { NextRequest, NextResponse } from "next/server";
import type { User as ClerkUser } from "@clerk/nextjs/api";
import { currentUser } from "@clerk/nextjs";
import connectMongoDB from "@/lib/mongodb";
import mongoose from "mongoose";
import { Favorite } from "@/models/favorite";
import { checkFavoriteApiInput } from "@/lib/schemas";

export async function POST(request: NextRequest) {
  const {sellerBookIds} = checkFavoriteApiInput.parse(await request.json());

  console.log('sellerBookIds: ',sellerBookIds);
  

  const userClerk: ClerkUser | null = await currentUser();
  if (!userClerk) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    if (!mongoose.connection.readyState) await connectMongoDB();

    const favorites = await Favorite.find({
      userId: userClerk?.id,
      "seller.sellerBookId": { "$in": sellerBookIds},
    });    

    if(!favorites) return NextResponse.json({status: 200, message: "Checked! No favorites with this id."});

    const favoriteBookId = favorites.map(favorite => (
        {favoriteId: favorite._id, seller: favorite.seller}
    ));

    return NextResponse.json(favoriteBookId);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error("An unknown error has occurred:", error);
    }
  }
}
