//import BooksForYou from "@/components/BooksForYou"
import BestSellers from "@/components/BestSellers"
import EBook from "@/components/EBook"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {

  return (
      <section>
       // <BooksForYou />
        <BestSellers />
        <EBook />
      </section>
  );
}
