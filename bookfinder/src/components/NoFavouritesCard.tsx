import Image from "next/image";
import Link from "next/link";

const NoFavouritesCard = () => {
  return (
    <div className="flex flex-col items-center gap-10 rounded-md border-2 px-12 py-8">
      <Image
        src="/no-favourites.svg"
        alt="No Favourites Found"
        width={300}
        height={300}
      />

      <div className="flex flex-col items-center">
        <h2 className="font-bold uppercase text-gray-400">
          No Favourites Found
        </h2>
        <Link
          className="font-bold uppercase text-teal-600 hover:underline"
          href="/"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NoFavouritesCard;
