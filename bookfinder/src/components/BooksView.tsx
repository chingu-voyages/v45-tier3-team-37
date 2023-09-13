"use client"

import BooksGrid from "./BooksGrid";
import BookCard from "./BookCard";
import { IBookPreview } from "@/lib/book";

type IProps = IBookPreview;

const BooksView = ({books}:{books:IProps[]}) => {
	
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
					noInfo = {book.noInfo}

				/>
			))}
		</BooksGrid>
	);
}

export default BooksView;