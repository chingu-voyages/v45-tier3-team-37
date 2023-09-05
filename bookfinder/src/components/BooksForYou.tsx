
'use client';
import Slider from 'react-slick';
import BookCard from "./BookCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{display: "block", background: "#ccc",marginRight:10,borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{display: "block", background: "#ccc", marginLeft:10, color:"black", borderRadius: '50%'}}
      onClick={onClick}
    />
  );
}

export default function BooksForYou()  {
  
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
          <div className="p-6" >
          <BookCard noInfo={true}/>
          </div>
            <div className="p-6" >
          <BookCard noInfo={true}/>
          </div>
            <div className="p-6" >
          <BookCard noInfo={true}/>
          </div>
          <div className="p-6" >
          <BookCard noInfo={true}/>
          </div>
            <div className="p-6" >
          <BookCard noInfo={true}/>
          </div>
            <div className="p-6" >
          <BookCard noInfo={true}/>
          </div>
          <div className="p-6" >
          <BookCard noInfo={true}/>
          </div>
          <div className="p-6" >
          <BookCard noInfo={true}/>
          </div>
          <div className="p-6" >
          <BookCard noInfo={true}/>
          </div>
        
        </Slider>
        </div>
    
    );
  }
