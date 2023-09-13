
'use client';
import Slider from 'react-slick';
import BookCard from "./BookCard";
import {ArrowProps} from "../lib/types"
import { IBookPreview } from "@/lib/book";
import React, { useEffect, useState } from 'react';


type IProps = IBookPreview;

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{display: "block", background: "#ccc",marginRight:10, borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{display: "block", background: "#ccc", marginLeft:10,borderRadius: '50%'}}
      onClick={onClick}
    />
  );
}
export default function EBook()  {
const [ EBookList, setEBookList ] = useState([]);
let books:any= []
	useEffect(() => {
		const getData = async () => {
    
			const query = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=flowers&filter=ebooks&key=AIzaSyBLVTkMbzjavGqGyXEtghzjx6oR3vYW6Zc`
			);
			const response = await query.json();
			setEBookList(res=>response.items);
	
		};
		getData();
  

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
        <section className="h-30 p-7">
        <div className="text-2xl font-bold tracking-wide">EBooks</div>
        
        <Slider {...settings}>
          {
        EBookList.length === 0 ? <>
        <div
          className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
        </div>
        </>:(
            
              EBookList?.map((book:any) => (
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
        </section>
    
    );
  }
