import NoFavouritesCard from "@/components/NoFavouritesCard";
import Image from "next/image";
import Link from "next/link";

const Favourites = () => {
  return (
    <div className="flex h-full items-center justify-center py-16">
      <NoFavouritesCard />
    </div>
  );
};

export default Favourites;
