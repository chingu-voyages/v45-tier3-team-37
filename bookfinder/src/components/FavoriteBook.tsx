import { useState, useEffect } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import {
  createFavorite,
  deleteFavorite,
  getFavoriteById,
} from "@/utils/fetcher";
import { useToast } from "./ui/use-toast";

interface IFavoriteBook {
  id: string;
  price: number;
}

const FavoriteBook = ({
  favoriteData,
  sellerPrice,
}: {
  favoriteData: {
    identifier: string;
    cover: string;
    title: string;
    author: string[];
    description: string;
  };
  sellerPrice: {
    seller: string;
    price: number;
    sellerBookId: string;
    buyLink: string;
  };
}) => {
  const { toast } = useToast();
  const identifier = favoriteData.identifier;
  const cover = favoriteData.cover;
  const title = favoriteData.title;
  const author = favoriteData.author;
  const description = favoriteData.description;
  const sellerName = sellerPrice.seller;
  const sellerBookId = sellerPrice.sellerBookId;
  const bookUrl = sellerPrice.buyLink;
  const price = sellerPrice.price;

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [favoriteBook, setFavoriteBook] = useState<IFavoriteBook>();

  useEffect(() => {
    getFavoriteById(identifier).then((response) => {
      if (
        response &&
        response.seller === sellerPrice.seller &&
        response.price === sellerPrice.price
      ) {
        setIsFavorite(true);
        setFavoriteBook({ id: response._id, price: response.price });
      }
    });
  }, []);

  function handleFavorite(favorite: boolean) {
    if (!isFavorite) {
      createFavorite({
        identifier,
        cover,
        title,
        author,
        description,
        sellerName,
        sellerBookId,
        bookUrl,
        price,
      }).then((response) => {
        if (response.message) {
          setFavoriteBook({
            id: response.favorite._id,
            price: response.favorite.price,
          });
          toast({
            description: response.message,
          });
        }
        if (response.error) {
          toast({
            variant: "destructive",
            title: "Something went wrong!",
            description:
              "Please try again. If the problem persist, do not hesitate to contact us.",
          });
        }
      });
    }

    if (isFavorite && favoriteBook) {
      deleteFavorite(favoriteBook.id).then((response) => {
        if (response.message) {
          toast({
            description: response.message,
          });
        }
        if (response.error) {
          toast({
            variant: "destructive",
            title: "Something went wrong!",
            description:
              "Please try again. If the problem persist, do not hesitate to contact us.",
          });
        }
      });
    }

    setIsFavorite(favorite);
  }

  return (
    <div
      className="flex w-[15%] items-end text-2xl"
      onClick={() => handleFavorite(!isFavorite)}
    >
      {isFavorite ? (
        <MdFavorite className={"cursor-pointer text-teal-600"} />
      ) : (
        <MdFavoriteBorder className={"cursor-pointer text-teal-600"} />
      )}
    </div>
  );
};

export default FavoriteBook;
