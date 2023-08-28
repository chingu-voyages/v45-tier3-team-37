import BooksView from "@/components/BooksView";
import BooksSkeleton from "@/components/BooksSkeleton";
import { Suspense } from "react";
import { searchBooks } from "@/utils/fetcher";

export default async function Page ({
    searchParams
} : {
    searchParams: {
        search?: string;
        title?: string;
        author?: string;
        publisher?: string;
    }
}) {

    const books = await searchBooks(searchParams);

	if(!books) {
		return <h3>No books found with this search criteria. Please try again using another search input.</h3>
	}

    return (
        <Suspense fallback={<BooksSkeleton />}>
            <BooksView books={books}/>
        </Suspense>
    )
}