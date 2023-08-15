import { NextResponse } from "next/server";

interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: {
    type: string;
    identifier: string;
  }[];
  readingModes: {
    text: boolean;
    image: boolean;
  };
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
}

interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: {
    isAvailable: boolean;
    acsTokenLink: string;
  };
  pdf: {
    isAvailable: boolean;
    acsTokenLink: string;
  };
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

interface SearchInfo {
  textSnippet: string;
}

interface BookVolume {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}

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

  const books = items.map((book: BookVolume) => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      description: book.volumeInfo.description,
      author: book.volumeInfo.authors,
      publisher: book.volumeInfo.publisher,
      imageLinks: book.volumeInfo.imageLinks,
    };
  });

  return NextResponse.json(books);
}
