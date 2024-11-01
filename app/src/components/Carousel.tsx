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
  "https://images.unsplash.com/photo-1521900092653-4bf38fcd896a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
];

const features = [
  {
    id: 1,
    title: "Trip Planner",
    subtitle: "Susun Rute Perjalananmu Sendiri",
    icon: "plane.png",
  },
  {
    id: 2,
    title: "Guide",
    subtitle: "Tour Guide berbahasa Indonesia",
    icon: "/user.png",
  },
  {
    id: 3,
    title: "Info",
    subtitle: "Info penting di luar negeri",
    icon: "/map.png",
  },
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
        <SwiperSlide className="items-center justify-between bg-white text-lg">
          <div className="container flex h-full justify-between gap-10">
            <img src={images[0]} alt={`Slide 1`} className="rounded-xl" />
            <div className="mx-20 flex-1">
              <div className="flex flex-col uppercase">
                Eksplor dan nikmati mudah liburan ke luar negeri dengan
                <span className="capitalize">Aplikasi GoGoTrip</span>
                Dapat didownload di
              </div>
              <div className="flex">
                <AppStoreButton />
                <GooglePlayButton />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-between bg-white text-lg">
          <div className="container flex h-full justify-between gap-10">
            <img src={images[1]} alt={`Slide 2`} className="rounded-xl" />
            <div className="flex flex-grow flex-col items-center justify-center">
              <div className="flex flex-col uppercase">
                Apa yang GoGoTrip punya ?
              </div>
              <ul className="w-full justify-center self-center">
                {features.map((feature, index) => {
                  return (
                    <li key={index}>
                      <a href="#" className="my-6 flex items-center gap-6">
                        <div className="w-[12%] rounded-full bg-gray-50 p-6">
                          <img src={feature.icon} className="" />
                        </div>
                        <div className="flex-grow">
                          <div className="mb-4 text-2xl font-bold">
                            {feature.title}
                          </div>
                          <button className="rounded-md bg-gray-50 px-4 py-1 text-sm font-semibold">
                            {feature.subtitle}
                          </button>
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
