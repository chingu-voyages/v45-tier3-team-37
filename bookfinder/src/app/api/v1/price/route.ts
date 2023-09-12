import { GoogleBookVolume } from "@/lib/types";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");  
 
  const identifier = searchParams.get("identifier")

  if (!id && !identifier) {
    return NextResponse.json({ error: "No results found" }, { status: 500 });
  }

  let bookSales = [];
let googleResponse:any=[];
  if(id)
  { 
     googleResponse = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}`,
  );

  }
  else{
    console.log('else identifier' + identifier)
     googleResponse = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn=${identifier}`,
  );
  }
  

  if (googleResponse) {
    const book = await googleResponse.json();
    console.log('+++++++', identifier)
    console.log('book' + book)
    console.log('booksaleinfo' + book.saleInfo)

    if (book.saleInfo?.saleability === "FOR_SALE") {
      bookSales.push({
        seller: "Google",
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
  // else{
  //   console.log('else icinde')
  //     const res2 = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn=${id}`);
	//     const book = await res2.json();
  //     if (book.saleInfo?.saleability === "FOR_SALE") {
  //     bookSales.push({
  //       seller: "Google",
  //       currency: book.saleInfo.listPrice?.currencyCode,
  //       price: book.saleInfo.listPrice?.amount,
  //       rating: book.volumeInfo.averageRating || "",
  //       ratingsCount: book.volumeInfo.ratingsCount || "",
  //       buyLink: book.saleInfo.buyLink,
  //     });
  //   } else if (book.saleInfo?.saleability === "FREE") {
  //     bookSales.push({
  //       seller: "Google",
  //       price: "FREE",
  //     });
  //   }

  // }

  console.log(bookSales)
  return NextResponse.json(bookSales);
}
