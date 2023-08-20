import { GoogleBookVolume } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isbn = searchParams.get("isbn");

  if (!isbn) {
    return NextResponse.json({ error: "No results found" }, { status: 500 });
  }

  let bookSales = [];

  const googleResponse = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
  );

  if (googleResponse) {
    const { items } = await googleResponse.json();
    const googlePrices = items.map((book: GoogleBookVolume) => {
      console.log(book.saleInfo.saleability);

      if (book.saleInfo.saleability === "FOR_SALE") {
        return {
          identifier: isbn,
          seller: "Google",
          price: book.saleInfo.listPrice?.amount,
        };
      } else if (book.saleInfo.saleability === "FREE") {
        return {
          identifier: isbn,
          seller: "Google",
          price: "FREE",
        };
      }
    });
    bookSales.push(...googlePrices);
  }

  return NextResponse.json(bookSales);
}
