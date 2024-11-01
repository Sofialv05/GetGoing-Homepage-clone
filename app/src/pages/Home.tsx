import ArticleList from "../components/ArticleList/ArticleList";
import PopularNowSlider from "../components/PopularNowSlider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import PrivateTrip from "../components/PrivateTrip";
import Testimonials from "../components/Testimonials";
import PopularNowData from "../../datas/popular-now.json";
import PopularCityData from "../../datas/popular-cities.json";
import PopularCitySlider from "../components/PopularCitySlider";

export default function Home() {
  return (
    <div className="h-full">
      <header>
        <Navbar />
      </header>
      <main className="pt-28">
        <Carousel />
        <PopularNowSlider datas={PopularNowData} />
        <section className="container">
          <div className="flex flex-col items-center">
            <h1 className="heading">
              "Better to <span className="highlight uppercase">see</span>{" "}
              something once than hear about it{" "}
              <span className="highlight uppercase">a thousand times</span>"
            </h1>
            <p className="text-3xl font-bold">- Asian Proverb.</p>
          </div>
        </section>
        <PrivateTrip />
        <PopularCitySlider datas={PopularCityData} />
        <Testimonials />
        <ArticleList />
      </main>
      <Footer />
    </div>
  );
}
