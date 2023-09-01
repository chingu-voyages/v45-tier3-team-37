
'use client';
import Slider from 'react-slick';
import BookCard from "./BookCard";
export default function BooksForYou()  {
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
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
        <div className="h-30 p-7 object-cover">
        <div className="text-2xl font-bold tracking-wide">Books For You</div>
        
        <Slider {...settings}>
          <div className="object-cover p-6" >
          <BookCard
          
				/>
          </div>
            <div className="object-cover p-6" >
          <BookCard
				/>
          </div>
            <div className="object-cover p-6" >
          <BookCard
          
				/>
          </div>
          <div className="object-cover p-6" >
          <BookCard
				/>
          </div>
            <div className="object-cover p-6" >
          <BookCard
				/>
          </div>
            <div className="object-cover p-6" >
          <BookCard
				/>
          </div>
         
        </Slider>
        </div>
     
    );
  }
