import { FavoriteSeller } from "@/lib/types";

type FavoriteBookDetails = {
  id: string;
  identifier: string;
  cover?: string;
  title: string;
  authors: string[];
  seller: FavoriteSeller[];
  createdAt: string;
};

const FavoriteBookCard = ({
  id,
  identifier,
  cover,
  title,
  authors,
  seller,
  createdAt,
}: FavoriteBookDetails) => {
  return (
    <div className="flex flex-col items-center gap-10 rounded-md border-2 px-12 py-8">
      <img src={cover} alt="Book Cover" />
      <p>Title: {title}</p>
      <p>
        Author(s):{" "}
        {authors.map((author) => (
          <span>{author}</span>
        ))}
      </p>
      <p>Date Added: {createdAt}</p>
    </div>
  );
};

export default FavoriteBookCard;
