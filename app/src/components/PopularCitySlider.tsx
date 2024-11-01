import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { PopularCity } from "../interfaces/Popular";

interface PopularCitySliderProps {
  datas: PopularCity[];
}

const PopularCitySlider: React.FC<PopularCitySliderProps> = ({ datas }) => {
  const swiperRef = React.useRef<SwiperType>();

  return (
    <section className="container relative">
      <h1 className="heading">
        Kota <span className="highlight">Populer</span>
      </h1>
      <div className="mt-9 font-sans text-sm text-black">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={{
            enabled: true,
            momentumBounce: false,
            momentumRatio: 0.25,
            momentumVelocityRatio: 0.25,
            sticky: true,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="h-full w-full [&_.swiper-pagination-bullet-active]:bg-red-600"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {datas.map((data, index) => (
            <SwiperSlide
              key={index}
              className="relative mb-20 flex items-center justify-center overflow-hidden bg-white"
            >
              <img
                src={data.img}
                alt={data.name}
                className="h-[400px] w-full rounded-xl object-cover"
              />
              <div className="image-cover rounded-lg"></div>
              <div className="absolute bottom-4 left-4 mt-2 flex flex-col text-white">
                <h3 className="text-3xl font-bold">{data.name}</h3>
                <p className="mt-3 text-xl">{data.country}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularCitySlider;
