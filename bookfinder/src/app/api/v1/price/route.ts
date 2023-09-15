import { GoogleBookVolume } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "No results found" }, { status: 500 });
  }

  let bookSales = [];

  const googleResponse = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}`,
  );

  if (googleResponse) {
    const book: GoogleBookVolume = await googleResponse.json();
    // console.log("+++++++", id);

    // dummy data for favorites tests
    bookSales.push({
      seller: "Ebay",
      sellerBookId: `Ebay${id}`,
      currency: "EUR",
      price: 40,
      rating: 3.5 || "",
      ratingsCount: 1500 || "",
      buyLink: "https://ebay.com",
    });
    bookSales.push({
      seller: "Amazon",
      sellerBookId: `AMZ${id}`,
      currency: "EUR",
      price: 39,
      rating: 3.5 || "",
      ratingsCount: 1500 || "",
      buyLink: "https://amazon.com",
    });
    // end dummy
    if (book.saleInfo?.saleability === "FOR_SALE") {
      bookSales.push({
        seller: "Google",
        sellerBookId: book.id,
        currency: book.saleInfo.listPrice?.currencyCode,
        price: book.saleInfo.listPrice?.amount,
        rating: book.volumeInfo.averageRating || "",
        ratingsCount: book.volumeInfo.ratingsCount || "",
        buyLink: book.saleInfo.buyLink,
      });
    } else if (book.saleInfo?.saleability === "FREE") {
      bookSales.push({
        seller: "Google",
        price: "FREE",
      });
    }
  }

  return NextResponse.json(bookSales);
}
