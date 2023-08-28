import BooksGrid from "./BooksGrid";
import BookSkeleton from "./BookSkeleton";

const BooksSkeleton = ({
	count = 10
}: {
	count?: number;
}) => (
    <BooksGrid className={"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-5 m-2"}>
        {Array.from(Array(count), (_, i) => (
			<BookSkeleton key={i} />
		))}
    </BooksGrid>
);

export default BooksSkeleton;