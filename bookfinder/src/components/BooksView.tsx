"use client"

import BooksGrid from "./BooksGrid";
import BookCard from "./BookCard";
import { useEffect, useState } from "react";
import { searchBooks } from "@/utils/fetcher";

const BooksView = () => {

	const [ books, setBooks ] = useState<any>([]);

	useEffect(() => {
		searchBooks({search: "garden"})
		.then(data => setBooks(data))
	}, []);

	return (
		<BooksGrid 
			className={"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-5 m-2"}
		>
			{books?.map((book:any) => (
				<BookCard
					id={book.id}
    				title={book.title}
					imageLinks={book.imageLinks}
    	            author={book.author}
					publisher={book.publisher}
					description={book.description}
					identifier={book.identifier}
					date={book.date}
    	            key={book.id}
				/>
			))}
		</BooksGrid>
	);
}

export default BooksView;