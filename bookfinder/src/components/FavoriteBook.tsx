import { useState, useEffect } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import {
  createFavorite,
  updateFavorite,
} from "@/utils/fetcher";
import { useToast } from "./ui/use-toast";

const FavoriteBook = ({
  favoriteData,
  sellerPrice,
  bookId,
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
  bookId: any;
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
  const [favoriteBook, setFavoriteBook] = useState<{favoriteId: string}>();

  useEffect(() => {
    if (bookId) {
      setIsFavorite(true);
      setFavoriteBook({
        favoriteId: bookId,
      });
    }
  }, [bookId]);

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
            favoriteId: response.favorite._id,
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
      setIsFavorite(favorite);
    }
    if (isFavorite && favoriteBook) {
      updateFavorite(favoriteBook.favoriteId, sellerBookId).then(
        (response) => {
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
        },
      );
      setIsFavorite(favorite);
    }
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
