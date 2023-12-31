import connectMongoDB from "@/lib/mongodb";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import type { User as ClerkUser } from "@clerk/nextjs/api";
import mongoose from "mongoose";

export async function GET(request: Request) {
  const userClerk: ClerkUser | null = await currentUser();
  if (!userClerk) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    if (!mongoose.connection.readyState) await connectMongoDB();

    let user = await User.findById(userClerk?.id);
    if (!user) {
      user = await User.create({
        _id: userClerk?.id,
        email: userClerk?.primaryEmailAddressId,
      });
    }

    return NextResponse.redirect(new URL("/", await request.url));
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message); // Known error type
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error("An unknown error has occurred:", error);
    }
  }
}
