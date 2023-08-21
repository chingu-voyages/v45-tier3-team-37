import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col bg-inherit">
      <Navbar />
      <section className="h-96">
        <div>Main content of the page goes here</div>
      </section>
      <Footer />
    </main>
  );
}
