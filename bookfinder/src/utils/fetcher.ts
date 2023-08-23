import { IBook, IBookPreview } from "@/lib/book";
import absoluteUrl from "./absoluteUrl";
import { notFound } from "next/navigation";

/* export const getBook = async (id: string): Promise<IBook> => {
	const url = absoluteUrl(`/api/books/v1/book?search=${id}`);

	const res = await fetch(url, {
		cache: "no-store"
	});

	const json = res.json();

	if (res.ok) return json;

	if (res.status === 404) return notFound();

	throw new Error(await json);
}; */

export const searchBooks = async ({
	query
}: {
	query?: string;
}): Promise<IBookPreview[]> => {

	const params = {
		query: query || ""
	};

	const url = absoluteUrl("/api/v1/book?search=" + params);

	const res = await fetch(url, {
		cache: "no-store"
	});

	const json = res.json();

	if (res.ok) return json;

	throw new Error(await json);
};

export const getBook = {
    id:'02',
    title:'This is the book title',
    image:'https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UY218_.jpg',
    author:'Author name',
    publisher: 'publisher',
    year: '2015',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.',
    currency: '$',
    price: '19,00'
}