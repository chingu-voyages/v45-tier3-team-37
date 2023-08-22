import Image from "next/image";
import Link from "next/link";
import { IBookPreview } from "@/lib/book";
import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

type IProps = IBookPreview;

const BookCard = ({ id, title, image, author, publisher, description }: IProps) => {
	const [isFavorite, setIsFavorite] = useState(false);

	//if search - function check if favorite books match previewed books

	function handleFavorite (favorite: boolean) {
		//function to add or to remove favorite books in db
		setIsFavorite(favorite);
	}

	return(
	<div className="flex p-[10px] justify-center bg-zinc-100 border border-black overflow-hidden select-none">
		<div className="flex flex-col w-full">
			<div className="py-1 h-16">
				<Link
					className="text-md font-medium text-center text-teal-600 line-clamp-2 transition duration-300 hover:text-teal-600 active:opacity-80"
					href={`/books/${id}`}
				>
					{title}
				</Link>
			</div>
			<Link
				className="relative pb-[130%] shadow-[0_5px_10px_0_rgba(0,0,0,0.3)]"
				href={`/books/${id}`}
				tabIndex={-1}
			>
				<Image
					className="transition duration-200 hover:opacity-80 active:opacity-60 bg-light-grey"
					fill
					sizes="100%"
					src={image ? image : '/no-image.png'}
					alt={title}
				/>
			</Link>
			<div className="w-full text-right text-md pt-2">
				{author}
			</div>
			<div className="flex justify-between py-2">
				<div className="w-[50%] text-2xl" onClick={() => handleFavorite(!isFavorite)}>
					{
						isFavorite ?
						<MdFavorite className={"text-teal-600 cursor-pointer"}/> :
						<MdFavoriteBorder className={"text-teal-600 cursor-pointer"}/>
					}
				</div>
				<div className="w-[50%] text-right text-md">
					{publisher}
				</div>
			</div>
			{/* I must add the link for the button below */}
			<Link
				className="bg-teal-600 shadow-[0_3px_5px_0_rgba(0,0,0,0.3)] transition duration-200 hover:bg-white"
				href={`/books/${id}`} 
				>
				<div className="text-center text-white text-sm py-[5px] transition duration-200 hover:text-teal-600">See all books</div>
			</Link>
		</div>
	</div>
	);
}

export default BookCard;