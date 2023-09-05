import { IBookPreview, IPrice } from "@/lib/book";
import absoluteUrl from "./absoluteUrl";
import { notFound } from "next/navigation";

export const searchBooks = async ({
	search,
	title,
	author,
	publisher
}: {
	search?: string;
	title?: string;
	author?: string;
	publisher?: string;
}): Promise <IBookPreview[]> => {

	const params = {
		search: search || "",
		title: title || "",
		author: author || "",
		publisher: publisher || "",
	};

	const filteredParams = Object.fromEntries(
		Object.entries(params).filter(([key, value]) => value !== "")
	);

	const url = absoluteUrl(`/api/v1/book?${Object.keys(filteredParams)}=` + Object.values(filteredParams));

	const res = await fetch(url, {
		cache: "no-store"
	});

	const json = res.json();

	if (res.ok) return json;

	throw new Error(await json);
};

export const getPrice = async (id: string): Promise<IPrice[]> => {
	const url = absoluteUrl(`/api/v1/price?id=${id}`);

	const res = await fetch(url, {
		cache: "no-store"
	});

	const json = res.json();

	if (res.ok) return json;

	if (res.status === 404) return notFound();

	throw new Error(await json);
};

export const createFavorite = async ({
	identifier,
	cover,
	title,
	description,
	seller,
	price,
}: {
	identifier: string;
    cover: string;
    title: string
    description: string;
	seller: string;
	price: number
}) => {
	const url = absoluteUrl(`/api/v1/favorite`);

	const res = await fetch(url, {
		method: "POST",
		body: JSON.stringify({identifier, cover, title, description, seller, price })
	});

	const json = res.json();

	if (res.ok) return json;

	throw new Error(await json);
};

export const getFavorite = async () => {
	const url = absoluteUrl(`/api/v1/favorite`);

	const res = await fetch(url, {
		cache: "no-store"
	});

	const json = res.json();

	if (res.ok) return json;

	if (res.status === 404) return notFound();

	throw new Error(await json);
};

export const getFavoriteById = async (identifier: string) => {
	const url = absoluteUrl(`/api/v1/favorite/${identifier}`);

	const res = await fetch(url, {
		cache: "no-store"
	});

	const json = res.json();

	if (res.ok) return json;

	if (res.status === 404) return notFound();

	throw new Error(await json);
};

export const deleteFavorite = async (id: string) => {
	const url = absoluteUrl(`/api/v1/favorite/${id}`);

	const res = await fetch(url, {
		method: "DELETE"
	});

	const json = res.json();

	if (res.ok) return json;

	if (res.status === 404) return notFound();

	throw new Error(await json);
};