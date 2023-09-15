import NoFavouritesCard from "@/components/NoFavouritesCard";
import Image from "next/image";
import Link from "next/link";
import { getFavorite, getFavoriteSSC } from "@/utils/fetcher";
import { BookFavoriteDB } from "@/lib/types";
import FavoriteBookCard from "@/components/FavoriteBookCard";

const Favourites = async () => {
  const favorites = await getFavoriteSSC();

  return (
    <div className="flex h-full items-center justify-center py-16">
      {favorites.length === 0 ? (
        <NoFavouritesCard />
      ) : (
        <div className="flex w-28 gap-5">
          {favorites.map((fav: BookFavoriteDB) => (
            <FavoriteBookCard
              id={fav.Id}
              identifier={fav.identifier}
              cover={fav.cover}
              title={fav.title}
              authors={fav.author}
              seller={fav.seller}
              createdAt={fav.createdAt}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
