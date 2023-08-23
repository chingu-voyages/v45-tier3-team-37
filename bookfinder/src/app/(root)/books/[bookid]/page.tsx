import { getBook } from "@/utils/fetcher";
import Image from "next/image";
import PriceList from "@/components/PriceList";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const Page = async ({ params: { bookId } }: { params: { bookId: string } }) => {
	const [/* session,  */book] = await Promise.all([/* getUserSession(), */ getBook/* (bookId) */]);

    //if session check book id to know if it is favorite book
    //if favorite setIsFavorite(true)

    // I will change a lot here. I must create some new components.

    //I must create a popup component for description show more.

    /* function handleFavorite (favorite: boolean) {
		//function to add or to remove favorite books in db
		setIsFavorite(favorite);
	} */

    return (
        <div className="w-full">
            <div className="grid grid-cols-[1fr,3fr] gap-4 p-3">
                <Image
                    style={{position: "static", boxShadow: "0 0 5px 1px gray"}}
                    width={"150"}
                    height={"200"}
					sizes="(max-width: 468px) 90vw, (max-width: 1200px) 45vw"
					src={book.image}
					alt={book.title}
                />
                <div className="flex flex-col gap-4">
                    <div className="w-full text-2xl text-teal-600">
                        {book.title}
                    </div>
                    <div>{book.author}</div>
                    <div>{book.publisher}</div>
                    <div>{book.year}</div>
                    {/* session ?  <MdFavorite /> : <MdFavoriteBorder /> - delete part below when ready*/}
                    <div className="text-2xl" /* onClick={() => handleFavorite(!isFavorite)} */>
                        
                            {/* isFavorite ? */}
                            {/* <MdFavorite className={"text-teal-600 cursor-pointer"} /> : */}
                            <MdFavoriteBorder className={"text-teal-600 cursor-pointer"} />
                        
                    </div>
                    <div>
                        <div className="text-lg font-semibold">
                            Description
                        </div>
                        <p>
                            {book.description.substring(0, 100)}...show more
                        </p>
                    </div>
                </div>
            </div>
            <PriceList />
        </div>
    );
}

export default Page;