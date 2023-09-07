import BooksForYou from "@/components/BooksForYou"
import BestSellers from "@/components/BestSellers"
import NewReleasesForYou from "@/components/NewReleasesForYou"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {

  return (
      <section>
        <BooksForYou />
        <BestSellers />
        <NewReleasesForYou />
      </section>
  );
}
