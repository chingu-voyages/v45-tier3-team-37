import Image from "next/image";
import Link from "next/link";
import { IBookPreview } from "@/lib/book";

type IProps = IBookPreview;

const BookCard = ({ id, title, imageLinks, author, publisher, description, identifier, date }: IProps) => {

	const query = {
		title: title,
		imageLinks: imageLinks,
		author: author,
		publisher: publisher,
		description: description,
		identifier: identifier,
		date: date,
	}

	return(
	<div className="flex p-[10px] justify-center bg-zinc-100 border border-black overflow-hidden select-none">
		<div className="flex flex-col w-full">
			<div className="py-1 h-16">
				<div
					className="text-md font-medium text-center text-teal-600 line-clamp-2 transition duration-300 hover:text-teal-600 active:opacity-80"
				>
					{title}
				</div>
			</div>
			<Link
				className="relative pb-[130%] shadow-[0_5px_10px_0_rgba(0,0,0,0.3)]"
				tabIndex={-1}
				href={{
					pathname: `/books/${id}`,
					query: query
				}}
			>
				<Image
					priority={true}
					className="transition duration-200 hover:opacity-80 active:opacity-60 bg-light-grey"
					fill
					sizes="100%"
					src={imageLinks ? imageLinks : '/no-image.png'}
					alt={title}
				/>
			</Link>
			<div className="text-right text-xs xs:text-sm sm:text-base pt-2 line-clamp-1">
				{
					author ? author : "No author available"
				}
			</div>
			<div className="w-full h-14 text-right text-xs xs:text-sm sm:text-base line-clamp-2">
				{
					publisher ? publisher : "No publisher available"
				}
			</div>
			<Link
				className="bg-teal-600 shadow-[0_3px_5px_0_rgba(0,0,0,0.3)] transition duration-200 hover:bg-white"
				href={{
					pathname: `/books/${id}`,
					query: query
				}}
				>
				<div className="text-center text-white text-sm py-[5px] transition duration-200 hover:text-teal-600">See all books</div>
			</Link>
		</div>
	</div>
	);
}

export default BookCard;