"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { checkFavorite } from "@/utils/fetcher";
import { Rating } from "react-custom-rating-component";
import { IPrice } from "@/lib/book";
import FavoriteBook from "./FavoriteBook";

type IProps = IPrice;
interface IFavorite {
  favoriteId: string;
  seller: [
    {
      bookUrl: string;
      price: number;
      sellerBookId: string;
      SellerName: string;
      _id: string;
    }
  ]
}

const PriceList = ({
  bookSeller,
  favoriteData,
}: {
  bookSeller: IProps[];
  favoriteData: {
    identifier: string;
    cover: string;
    title: string;
    author: string[];
    description: string;
  };
}) => {
  
  const bookIds = () => {
    const bookIdArr:string[] = [];
    for (let i=0; i<bookSeller.length; i++) {
      bookIdArr.push(bookSeller[i].sellerBookId)
    }
    return bookIdArr;
  }

  const [ sellerBookIds, setSellerBookIds ] = useState<string[]>([]);
  const [ favoriteBooks, setFavoriteBooks ] = useState<IFavorite>();

  function check() {
    checkFavorite(sellerBookIds)
    .then(response => setFavoriteBooks(response[0]));
  }

  useEffect(() => {
    if(sellerBookIds.length > 0) {
      check();
    } else {
      setSellerBookIds(bookIds());
    }
  }, [sellerBookIds]);

  return (
    <div className="flex flex-col p-3">
      <div className="self-end pb-2">
        <select name="sort" id="sort" className="bg-white p-1">
          <option value="">sort</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      {
      bookSeller?.map((book, index) => {
        const favorite = () => {
          if(favoriteBooks) {
            for(let i=0; i < favoriteBooks.seller.length; i++) {
              if(favoriteBooks.seller[i].sellerBookId === book.sellerBookId) {
                return favoriteBooks.favoriteId
              }
            }
          }
        }
        
        return (
          <div
            key={index}
            className="mb-2 box-border grid grid-cols-[2fr,1fr,1fr,1fr] border p-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="flex">
                <div>{book.currency ? book.currency : ""}</div>
                <div className="ml-1 mr-3">
                  {book.price ? book.price : "No price"}
                </div>
                <FavoriteBook favoriteData={favoriteData} sellerPrice={book} bookId={favorite()} />
              </div>
              {book.rating ? (
                <div className="flex">
                  <Rating
                    defaultValue={book.rating}
                    size="20px"
                    spacing="1px"
                    activeColor="#00917C"
                    readOnly={true}
                  />
                  <div className="ml-1 flex flex-col align-baseline">
                    {book.ratingsCount ? (
                      <div className="">{`(${book.ratingsCount})`}</div>
                    ) : null}
                  </div>
                </div>
              ) : (
                <div>Not rated yet</div>
              )}
            </div>
            <div className="text-center">
              {book.price ? "in stock" : "out of stock"}
            </div>
            <div className="text-center">
              {book.seller ? book.seller : "Not defined"}
            </div>
            <div className="flex justify-end">
              <Link
                className="w-full bg-teal-600 text-center text-white transition duration-200 hover:bg-white hover:text-teal-600  md:w-[80%]"
                href={book.buyLink ? book.buyLink : "/"}
                target="blank"
              >
                Go to seller
              </Link>
            </div>
          </div>
        );
      })}
      <div className="flex self-end font-semibold">
        <div className="pl-1">1</div>
        <div className="pl-1">2</div>
        <div className="pl-1">3</div>
      </div>
    </div>
  );
};

export default PriceList;
