"use client"

import Link from "next/link";
import { Rating } from "react-custom-rating-component";
import { IPrice } from "@/lib/book";
import FavoriteBook from "./FavoriteBook";

type IProps = IPrice;

const PriceList = ({bookSeller}:{bookSeller:IProps[]}) => {

    if (bookSeller.length <= 0) {
        return (
            <div className="text-center py-10">
                This book is not for sale.
            </div>
        );
    }

    return (
        <div className="flex flex-col p-3">
            <div className="pb-2 self-end">
                <select name="sort" id="sort" className="p-1 bg-white">
                    <option value="">sort</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
            {
                bookSeller?.map((book, index) => {

                    return (
                        <div key={index} className="grid grid-cols-[2fr,1fr,1fr,1fr] border box-border p-2 mb-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <div className="flex">
                                    <div>
                                        {
                                            book.currency ? book.currency : ""
                                        }
                                    </div>
                                    <div className="ml-1 mr-3">
                                        {
                                            book.price ? book.price : "No price"
                                        }
                                    </div>
                                    <FavoriteBook />
                                </div>
                                {
                                    book.rating ?
                                    <div className="flex">
                                        <Rating
                                            defaultValue={book.rating}
                                            size="25px"
                                            spacing="5px"
                                            activeColor="#00917C"
                                        />
                                        <div className="ml-1">({book.ratingsCount ? book.ratingsCount: null})</div>
                                    </div>:
                                    <div>Not rated yet</div>
                                }
                            </div>
                            <div className="text-center">
                                {
                                    book.price ? "in stock" : "out of stock"
                                }
                            </div>
                            <div className="text-center">
                                {
                                    book.seller ? book.seller : "Not defined"
                                }
                            </div>
                            <div className="flex justify-end">
                                <Link
                                    className="bg-teal-600 text-white text-center w-full md:w-[80%] transition duration-200 hover:bg-white  hover:text-teal-600"
                                    href={
                                        book.buyLink ? book.buyLink : "/"
                                    }
                                    target="blank"
                                    >
                                        Go to seller
                                </Link>
                            </div>
                        </div>
                    );
                })
            }
            <div className="flex font-semibold self-end">
                <div className="pl-1">1</div>
                <div className="pl-1">2</div>
                <div className="pl-1">3</div>
            </div>
        </div>
    )
}

export default PriceList;