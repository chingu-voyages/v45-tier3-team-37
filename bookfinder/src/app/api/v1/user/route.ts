import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import type { User as ClerkUser } from "@clerk/nextjs/api";

export async function POST(request: Request) {
  const userClerk: ClerkUser | null = await currentUser();
  try {
    await connectMongoDB();

    let user = await User.findById(userClerk?.id);
    if (!user) {
      user = await User.create({
        _id: userClerk?.id,
        email: userClerk?.emailAddresses[0],
      });
    }

    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message); // Known error type
    } else {
      console.error("An unknown error has occurred:", error);
    }
  }
}
