import Articles from "../components/Articles/Articles";
import CardSlider from "../components/PopularNow/CardSlider";
import Footer from "../components/Footer";
// import ScrollTransformSquare from "../components/Test";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      {/* <ScrollTransformSquare /> */}
      <main className="mx-20 h-screen">
        <CardSlider />
      </main>
      <main className="h-screen">
        <CardSlider />
      </main>
      <Articles />
      <Footer />
    </div>
  );
}
