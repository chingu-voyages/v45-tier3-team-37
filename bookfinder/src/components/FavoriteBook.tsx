import { useState, useEffect } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { createFavorite, deleteFavorite, getFavoriteById } from "@/utils/fetcher";

interface IFavoriteBook {
	id: string;
	price: number;
}

const FavoriteBook = ({
	favoriteData,
	sellerPrice,
}:{
	favoriteData: {
        identifier: string;
        cover: string;
        title: string
        description: string;
	},
	sellerPrice: {
		seller: string;
		price: number;
	}
}) => {

	const identifier= favoriteData.identifier;
	const cover = favoriteData.cover;
	const title = favoriteData.title;
	const description = favoriteData.description;
	const seller = sellerPrice.seller;
	const price = sellerPrice.price;

    const [isFavorite, setIsFavorite] = useState<boolean>(false);
	const [favoriteBook, setFavoriteBook] = useState<IFavoriteBook>();
    
    useEffect(() => {
		getFavoriteById(identifier)
		.then(response => {
			if(response && response.seller === sellerPrice.seller) {
				setIsFavorite(true);
				setFavoriteBook({id: response._id, price: response.price});
			}
		})
	}, []);

	function handleFavorite (favorite: boolean) {

		if(!isFavorite) {
			createFavorite({ identifier, cover, title, description, seller, price });
		}

		if(isFavorite && favoriteBook) {
			deleteFavorite(favoriteBook.id)
		}
		
		setIsFavorite(favorite);
	}

    return (
        <div className="flex items-end w-[15%] text-2xl" onClick={() => handleFavorite(!isFavorite)}>
			{
				isFavorite ?
				<MdFavorite className={"text-teal-600 cursor-pointer"}/> :
				<MdFavoriteBorder className={"text-teal-600 cursor-pointer"}/>
			}
		</div>
    )
}

export default FavoriteBook;