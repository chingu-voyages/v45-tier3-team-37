import PriceList from "@/components/PriceList";
import BookPage from "@/components/BookPage";
import { getPrice } from "@/utils/fetcher";

const Page = async ({
    params,
    searchParams
    } : {
    params: {
        bookid: string;
    },
    searchParams: {
        title: string;
        imageLinks: string;
        author: string;
        publisher: string;
        description: string;
        identifier: string;
        date: string;
    }}) => {
    
    const id = params.bookid;
    console.log('id: ',id);
    
    const bookSeller = await getPrice(id);

    if (!bookSeller) {
        return <h3>Something went wrong! Please try again.</h3>
    }

    return (
        <div className="w-full">
            <BookPage {...searchParams} />
            <PriceList bookSeller={bookSeller}/>
        </div>
    );
}

export default Page;