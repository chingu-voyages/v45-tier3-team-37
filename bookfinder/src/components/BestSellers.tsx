'use client';
import Slider from 'react-slick';
import BookCard from './BookCard';
import { ArrowProps } from '../lib/types';
import { useEffect, useState } from 'react';


function SampleNextArrow(props: ArrowProps) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ display: 'block', background: '#ccc', marginRight: 10, borderRadius: '50%' }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props: ArrowProps) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ display: 'block', background: '#ccc', marginLeft: 10, borderRadius: '50%' }}
			onClick={onClick}
		/>
	);
}

// function callApi() {
// 	useEffect(() => {
// 		const getData = async () => {
// 			const query = await fetch('https://jsonplaceholder.typicode.com/todos');
// 			const response = await query.json();
// 			console.log('+++++++++ ', response);
// 		};
// 		getData();
// 	}, []);
// }


const BestSellers = ({ imageLinks }: IProps) => {

	const [ bookInfo, setBookInfo ] = useState([]);

	useEffect(() => {
    
		const getData = async () => {
    
			const query = await fetch(
				'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=IxTopR5GOShHbpkyGXWkVnZBzNEdjdQr'
			);
			const response = await query.json();

			setBookInfo((res)=>response.results.books);
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
			<div className="text-2xl font-bold tracking-wide">Best Sellers</div>

			<Slider {...settings}>
        
				{
          bookInfo.length === 0 ? <div> Loading BestSellers</div> :(
            bookInfo.map((book: any) =>
          <div className="p-6" key={book.rank}>
			        <BookCard imageLinks ={book.book_image} noInfo={true}/>
          </div>)
          )
          
        }
        
			</Slider>
		</section>
	);
};

export default BestSellers;
