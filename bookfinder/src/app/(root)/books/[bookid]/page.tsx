import PriceList from "@/components/PriceList";
import BookPage from "@/components/BookPage";
import { getPrice } from "@/utils/fetcher";
import ebayPrices from "@/utils/ebayPrices";

const Page = async ({
  params,
  searchParams,
}: {
  params: {
    bookid: string;
  };
  searchParams: {
    title: string;
    imageLinks: string;
    author: string[];
    publisher: string;
    description: string;
    identifier: string;
    date: string;
  };
}) => {
  const id = params.bookid;
  const {
    title,
    imageLinks,
    author,
    publisher,
    description,
    identifier,
    date,
  } = searchParams;

  const authorArr: Array<string> = [];
  if (!Array.isArray(author)) {
    authorArr.push(author);
  } else {
    for (let i = 0; i < author.length; i++) {
      authorArr.push(author[i]);
    }
  }

  const favoriteData = {
    identifier: identifier,
    cover: imageLinks,
    title: title,
    author: authorArr,
    description: description,
  };

  const publisherDate = {
    publisher: publisher,
    date: date,
  };

  const bookData = { ...favoriteData, ...publisherDate };

  const googleBook = await getPrice(id);

  const ebayList = await ebayPrices(title, author);

  const bookSeller = [...googleBook, ...ebayList ];

  return (
    <div className="w-full">
      <BookPage {...bookData} />
      <PriceList bookSeller={bookSeller} favoriteData={favoriteData} />
    </div>
  );
};

export default Page;
