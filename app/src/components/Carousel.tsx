import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import { AppStoreButton, GooglePlayButton } from "./Button";

// interface CarouselProps {
//   images: string[];
// }
const images = [
  "https://plus.unsplash.com/premium_photo-1684407617181-275e50374e95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJpcHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1620851500170-860a690a7101?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJpcHxlbnwwfHwwfHx8MA%3D%3D",
];

const features = [
  {
    id: 1,
    title: "Trip Planner",
    subtitle: "Susun Rute Perjalananmu Sendiri",
    icon: "",
  },
  {
    id: 2,
    title: "Guide",
    subtitle: "Tour Guide berbahasa Indonesia",
    icon: "",
  },
  { id: 3, title: "Info", subtitle: "Info penting di luar negeri", icon: "" },
];

const Carousel: React.FC = () => {
  const swiperRef = React.useRef<SwiperType>();

  return (
    <div className="relative h-[400px] w-full">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="h-full w-full"
        loop={true}
        speed={1500}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide className="h-full items-center justify-center bg-white text-lg">
          <div className="flex justify-center gap-10">
            <img src={images[0]} alt={`Slide 1`} className="rounded-xl" />
            <div>
              <div className="flex flex-col uppercase">
                Eksplor dan nikmati mudah liburan ke luar negeri dengan
                <span className="capitalize">Aplikasi GoTravel</span>
                Dapat didownload di
              </div>
              <div className="flex">
                <AppStoreButton />
                <GooglePlayButton />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-white text-lg">
          <div className="flex justify-center gap-10">
            <img src={images[1]} alt={`Slide 2`} className="rounded-xl" />
            <div>
              <div className="flex flex-col uppercase">
                Apa yang GoTravel punya ?
              </div>
              <ul>
                {features.map((feature, index) => {
                  return (
                    <li key={index}>
                      <a href="#">
                        <img src="" />
                        <div>
                          <div>{feature.title}</div>
                          <div className="bg-gray-400">{feature.subtitle}</div>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
