import { FavoriteSeller } from "@/lib/types";
import Image from "next/image";

type FavoriteBookDetails = {
  id: string;
  identifier: string;
  cover?: string;
  title: string;
  author: string[];
  seller: FavoriteSeller[];
  createdAt: string;
};

const formatDate = (dateCreated: string) => {
  const inputDate = new Date(dateCreated);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = inputDate.toLocaleDateString("en-US", options);
  return formattedDate;
};

const FavoriteBookCard = ({
  id,
  identifier,
  cover,
  title,
  author,
  seller,
  createdAt,
}: FavoriteBookDetails) => {
  return (
    <div className="flex w-96 flex-col items-center gap-3 rounded-md border-2 px-6 py-4 shadow-md">
      <img className="h-48 w-48 object-contain" src={cover} alt="Book Cover" />
      <p className="text-lg font-bold">
        Title: <span>{title}</span>
      </p>
      <p className="w-56 break-normal">
        Author(s): <span>{author.join(", ")}</span>
      </p>
      <p>Date Added: {formatDate(createdAt)}</p>
    </div>
  );
};

export default FavoriteBookCard;
