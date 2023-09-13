import NoFavouritesCard from "@/components/NoFavouritesCard";
import Image from "next/image";
import Link from "next/link";
import { getFavorite } from "@/utils/fetcher";

const Favourites = () => {

  const favorites =  getFavorite();
  //console.log('favorites: ',favorites);
  
  return (
    <div className="flex h-full items-center justify-center py-16">
      <NoFavouritesCard />
    </div>
  );
};

export default Favourites;
