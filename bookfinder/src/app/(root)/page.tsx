import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BooksView from "@/components/BooksView";

const books = [
  {id:'01', title:'This is the book title', image:'https://m.media-amazon.com/images/I/41mc05UgX8L._SX329_BO1,204,203,200_.jpg', author:'Author name', publisher: 'Publisher', description:''},
  {id:'02', title:'This is the book title', image:'https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UY218_.jpg', author:'Author name', publisher: 'Publisher', description:''},
  {id:'03', title:'This is a very very very very long book title', image:'https://m.media-amazon.com/images/I/61WjGybHCTL._AC_UY218_.jpg', author:'Author name', publisher: 'Publisher', description:''},
  {id:'04', title:'This is the book title', image:'https://m.media-amazon.com/images/I/716K2m1fIiL._AC_UY218_.jpg', author:'Author name', publisher: 'Publisher', description:''},
  {id:'05', title:'This is the book title', image:'https://m.media-amazon.com/images/I/61rFg3n+olL._AC_UY218_.jpg', author:'Author name', publisher: 'Publisher', description:''},
  {id:'06', title:'This is the book title', image:'', author:'Author name', publisher: 'Publisher', description:''}
]

export default function Home() {
  return (
    <main className="flex flex-col bg-inherit">
      <Navbar />
      <section>
        <div>Main content of the page goes here</div>
        <BooksView books={books} />
      </section>
      <Footer />
    </main>
  );
}
