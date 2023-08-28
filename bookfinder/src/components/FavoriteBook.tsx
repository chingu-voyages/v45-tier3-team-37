import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const FavoriteBook = () => {

    const [isFavorite, setIsFavorite] = useState(false);
    
    //to do - if session check book id to know if it is favorite book

	function handleFavorite (favorite: boolean) {
		//to do - function to add or to remove favorite books in db
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