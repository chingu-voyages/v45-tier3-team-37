import PriceList from "@/components/PriceList";
import BookPage from "@/components/BookPage";

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

    return (
        <div className="w-full">
            <BookPage {...searchParams} />
            <PriceList id={id}/>
        </div>
    );
}

export default Page;