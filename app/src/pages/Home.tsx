import ArticleList from "../components/ArticleList/ArticleList";
import CardSlider from "../components/CardSlider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import PrivateTrip from "../components/PrivateTrip";
import Testimonials from "../components/Testimonials";
import { PopularCityCard, PopularNowCard } from "../components/PopularCard";

export default function Home() {
  return (
    <div className="h-full">
      <header>
        <Navbar />
      </header>
      <main className="">
        <div className="">
          <Carousel />
        </div>
        <div className="mt-20">
          <CardSlider>
            <PopularNowCard />
          </CardSlider>
        </div>
        <section>
          <h1>
            "Better to <span className="uppercase">see</span> something once
            than hear about it{" "}
            <span className="uppercase">a thousand times</span>"
          </h1>
          <p>- Asian Proverb.</p>
        </section>
        <section className="container">
          <div className="">
            <div className="">
              <span className="uppercase">private trip</span>
              <h1 className="">
                Berangkat <span>Kapan Saja</span> <br />
                Semaumu
              </h1>
            </div>
            <div>
              <div>
                <div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <p>Tentukan tanggal keberangkatan sesukamu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PrivateTrip />
        <div>
          <CardSlider>
            <PopularCityCard />
          </CardSlider>
        </div>
        <Testimonials />
        <ArticleList />
      </main>
      <Footer />
    </div>
  );
}
