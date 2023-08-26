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
	console.log(url);

	const res = await fetch(url, {
		cache: "no-store"
	});

	const json = res.json();
	console.log(await json);
	

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