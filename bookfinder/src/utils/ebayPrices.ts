import { ebayPriceList } from "@/utils/fetcher";
import { IPrice } from "@/lib/book";

const ebayPrices = async(title:string, author:string[]) => {

    const bookData = await ebayPriceList( encodeURIComponent(title), encodeURIComponent(author[0]))
        .then(response => {
            if (response) {
                return response.findItemsByKeywordsResponse[0].searchResult[0].item
            } else {
                return
            }
        });
    
    if (!bookData) return [];

    const ebayList = <IPrice[]>[];
    
    for (let i=0; i<bookData.length; i++) {
        
        ebayList.push({
            seller: "Ebay",
            sellerBookId: bookData[i].itemId[0],
            currency: bookData[i].sellingStatus[0].currentPrice[0]['@currencyId'],
            price: Number(bookData[i].sellingStatus[0].currentPrice[0].__value__),
            rating: 0,
            ratingsCount: "",
            buyLink: bookData[i].viewItemURL[0],
        });
    }

    return ebayList;
}

export default ebayPrices;