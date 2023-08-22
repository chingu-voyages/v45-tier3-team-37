"use client"

import { IBookPreview } from "../lib/book";
import BooksGrid from "./BooksGrid";
import BookCard from "./BookCard";

const BooksView = ({
	books,
}: {
	books: IBookPreview[];
}) => (
	<BooksGrid 
		className={"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-5 m-2"}
	>
		{books.map((book) => (
			<BookCard
				id={book.id}
                title={book.title}
				image={book.image}
                author={book.author}
				publisher={book.publisher}
				/* year={book.year} */
				description={book.description}
                key={book.id}
			/>
		))}
	</BooksGrid>
);

export default BooksView;