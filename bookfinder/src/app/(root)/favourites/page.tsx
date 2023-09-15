import NoFavouritesCard from "@/components/NoFavouritesCard";
import Image from "next/image";
import Link from "next/link";
import { getFavorite, getFavoriteSSC } from "@/utils/fetcher";

const Favourites = async () => {
  const favorites = await getFavoriteSSC();
  console.log("favorites: ", favorites);

  return (
    <div className="flex h-full items-center justify-center py-16">
      <NoFavouritesCard />
    </div>
  );
};

export default Favourites;
