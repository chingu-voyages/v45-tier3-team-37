import NoFavouritesCard from "@/components/NoFavouritesCard";
import Image from "next/image";
import Link from "next/link";
import { getFavorite, getFavoriteSSC } from "@/utils/fetcher";
import { BookFavoriteDB } from "@/lib/types";
import FavoriteBookCard from "@/components/FavoriteBookCard";

const Favourites = async () => {
  const favorites = await getFavoriteSSC();

  return (
    <div className="flex w-full justify-center">
      <div className="max-w-7xl">
        {favorites.length === 0 ? (
          <div className="flex h-full items-center justify-center py-16">
            <NoFavouritesCard />
          </div>
        ) : (
          <div className="flex flex-wrap gap-5 py-16">
            {favorites.map((fav: BookFavoriteDB) => (
              <FavoriteBookCard
                key={fav.Id}
                id={fav.Id}
                identifier={fav.identifier}
                cover={fav.cover}
                title={fav.title}
                author={fav.author}
                seller={fav.seller}
                createdAt={fav.createdAt}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
