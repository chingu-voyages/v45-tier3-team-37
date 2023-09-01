
'use client';
import Slider from 'react-slick';
import BookCard from "./BookCard";
export default function NewReleasesForYou()  {
  
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
        <section className="h-30 p-7 object-cover">
        <div className="text-2xl font-bold tracking-wide">New Releases For You</div>
        
        <Slider {...settings}>
          <div className="object-cover p-4" >
          <BookCard
					id={"1"}
					title={"title"}
					author={"author"}
          size={"50%"}

				/>
          </div>
            <div className="object-cover p-4" >
          <BookCard
					id={"1"}
					title={"title"}
					author={"author"}
          size={"50%"}
				/>
          </div>
            <div className="object-cover p-4" >
          <BookCard
					id={"1"}
					title={"title"}
					author={"author"}
          size={"50%"}
				/>
          </div>
           <div className="object-cover p-4" >
          <BookCard
					id={"1"}
					title={"title"}
					author={"author"}
          size={"50%"}
				/>
          </div>
            <div className="object-cover p-4" >
          <BookCard
					id={"1"}
					title={"title"}
					author={"author"}
          size={"50%"}
				/>
          </div>
            <div className="object-cover p-4" >
          <BookCard
					id={"1"}
					title={"title"}
					author={"author"}
          size={"50%"}
				/>
          </div>
         
        </Slider>
        </section>
     
    );
  }
