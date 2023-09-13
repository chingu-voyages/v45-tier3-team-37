import { ebayPriceList } from "@/utils/fetcher";

const ebayPrices = async(title:string, author:string[]) => {

    const bookData = await ebayPriceList( encodeURIComponent(title), encodeURIComponent(author[0]))
        .then(response => response.findItemsByKeywordsResponse[0].searchResult[0].item[0])

    const prices = await bookData;
    return prices;
}

export default ebayPrices;