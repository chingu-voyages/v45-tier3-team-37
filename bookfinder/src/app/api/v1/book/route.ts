import { GoogleBookVolume } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");
  const title = searchParams.get("title");
  const author = searchParams.get("author");
  const publisher = searchParams.get("publisher");

  let googleUrl = "https://www.googleapis.com/books/v1/volumes?q=";

  if (search) {
    googleUrl += `${search}`;
  }
  if (title) {
    googleUrl += `+intitle:${title}`;
  }
  if (author) {
    googleUrl += `+inauthor:${author}`;
  }
  if (publisher) {
    googleUrl += `+inpublisher:${publisher}`;
  }

  const data = await fetch(googleUrl);
  const { items } = await data.json();

  if (!items) {
    return NextResponse.json({ error: "No results found" }, { status: 500 });
  }

  const books = items.map((book: GoogleBookVolume) => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      description: book.volumeInfo.description,
      author: book.volumeInfo.authors,
      publisher: book.volumeInfo.publisher,
      imageLinks: book.volumeInfo.imageLinks,
      identifier: book.volumeInfo.industryIdentifiers[0].identifier,
    };
  });

  return NextResponse.json(books);
}
