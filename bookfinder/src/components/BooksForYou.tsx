
'use client';
import Slider from 'react-slick';
import BookCard from "./BookCard";
import {ArrowProps, FavoriteSeller} from "../lib/types"
import { BookFavoriteDB } from "@/lib/types";
import { getBooksByAuthor, getFavoriteSSC } from "@/utils/fetcher";
import { useEffect, useState } from 'react';


function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{display: "block", background: "#ccc",marginRight:10,borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{display: "block", background: "#ccc", marginLeft:10, color:"black", borderRadius: '50%'}}
      onClick={onClick}
    />
  );
}

export default async function BooksForYou()  {
  
  const favorites = await getFavoriteSSC();
  const [ booksFromAuthors, setBooksFromAuthors ] = useState<any>([]);
  useEffect(() => {
    if(favorites.length !== 0)
        {
            favorites.forEach((favorite: { 
            id: string;
            identifier: string;
            cover?: string | undefined; 
            title: string; 
            authors: string[]; 
            seller: FavoriteSeller[]; 
            createdAt: string; }) => 
          { const booksFromAuthor =  getBooksByAuthor(favorite.authors)
            setBooksFromAuthors((prev: any)=>[...prev,booksFromAuthor])
          });
        }
  }, []);

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className="h-30 p-7">
        <div className="text-2xl font-bold tracking-wide">Books For You</div>
        
      <Slider {...settings}>
        {
        booksFromAuthors.length === 0 ? null:(
        
	 booksFromAuthors?.map((book:any) => (
              <div className="p-6" key={book.id}>
                <BookCard 
                      id={book.id}
                      title={book.volumeInfo.title}
                      imageLinks={book.volumeInfo.imageLinks.smallThumbnail}
                      author={book.volumeInfo.authors}
                      publisher={book.volumeInfo.publisher}
                      description={book.volumeInfo.description}
                      identifier={""}
                      date={book.volumeInfo.publishedDate}
                      key={book.id}
                      noInfo = {true}
                      />
                  </div>))
        )}
        
        
        </Slider>
        </div>
    
    );
  }
