import { IBookPreview, IPrice } from "@/lib/book";
import absoluteUrl from "./absoluteUrl";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs";

export const searchBooks = async ({
  search,
  title,
  author,
  publisher,
}: {
  search?: string;
  title?: string;
  author?: string;
  publisher?: string;
}): Promise<IBookPreview[]> => {
  const params = {
    search: search || "",
    title: title || "",
    author: author || "",
    publisher: publisher || "",
  };

  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([key, value]) => value !== ""),
  );

  const url = absoluteUrl(
    `/api/v1/book?${Object.keys(filteredParams)}=` +
      Object.values(filteredParams),
  );

  const res = await fetch(url, {
    cache: "no-store",
  });

  const json = res.json();

  if (res.ok) return json;

  throw new Error(await json);
};

export const getPrice = async (id: string): Promise<IPrice[]> => {
  const url = absoluteUrl(`/api/v1/price?id=${id}`);

  const res = await fetch(url, {
    cache: "no-store",
  });

  const json = res.json();

  if (res.ok) return json;

  if (res.status === 404) return notFound();

  throw new Error(await json);
};

export const createFavoriteSSC = async ({
  identifier,
  cover,
  title,
  author,
  description,
  sellerName,
  sellerBookId,
  price,
  bookUrl,
}: {
  identifier: string;
  cover: string;
  title: string;
  author: string[];
  description: string;
  price: number;
  sellerName: string;
  sellerBookId: string;
  bookUrl: string;
}) => {
  const { getToken } = auth();
  const url = absoluteUrl(`/api/v1/favorite`);

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      identifier,
      cover,
      title,
      author,
      description,
      sellerName,
      sellerBookId,
      price,
      bookUrl,
    }),
    headers: { Authorization: `Bearer ${await getToken()}` },
  });

  const json = res.json();

  if (res.ok) return json;

  throw new Error(await json);
};

export const createFavorite = async ({
  identifier,
  cover,
  title,
  author,
  description,
  sellerName,
  sellerBookId,
  price,
  bookUrl,
}: {
  identifier: string;
  cover: string;
  title: string;
  author: string[];
  description: string;
  price: number;
  sellerName: string;
  sellerBookId: string;
  bookUrl: string;
}) => {
  const url = absoluteUrl(`/api/v1/favorite`);

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      identifier,
      cover,
      title,
      author,
      description,
      sellerName,
      sellerBookId,
      price,
      bookUrl,
    }),
  });

  const json = res.json();

  if (res.ok) return json;

  throw new Error(await json);
};

export const getFavorite = async () => {
  const url = absoluteUrl(`/api/v1/favorite`);

  const res = await fetch(url, {
    cache: "no-store",
  });

  const json = res.json();

  if (res.ok) return json;

  if (res.status === 404) return notFound();

  throw new Error(await json);
};

export const getFavoriteSSC = async () => {
  const { getToken } = auth();
  const url = absoluteUrl(`/api/v1/favorite`);

  const res = await fetch(url, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${await getToken()}` },
  });

  const json = res.json();

  if (res.ok) return json;

  if (res.status === 404) return notFound();

  throw new Error(await json);
};

export const getFavoriteById = async (identifier: string) => {
  const url = absoluteUrl(`/api/v1/favorite/${identifier}`);

  const res = await fetch(url, {
    cache: "no-store",
  });

  const json = res.json();

  if (res.ok) return json;

  if (res.status === 404) return notFound();

  throw new Error(await json);
};

export const deleteFavorite = async (id: string, sellerBookId: string) => {
  const url = absoluteUrl(`/api/v1/favorite/${id}/${sellerBookId}`);

  const res = await fetch(url, {
    method: "DELETE",
  });

  const json = res.json();

  if (res.ok) return json;

  if (res.status === 404) return notFound();

  throw new Error(await json);
};

export const ebayPriceList = async (title: string, author: string) => {
  let url = `https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${process.env.NEXT_PUBLIC_EBAY_APP}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${title}%20${author}&paginationInput.entriesPerPage=10`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  const json = res.json();

  if (res.ok) return json;

  if (res.status === 404) return notFound();

  throw new Error(await json);
};
