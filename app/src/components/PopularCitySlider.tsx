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
      <h1>
        Kota <span>Populer</span>
      </h1>
      <div className="font-sans text-sm text-black">
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
              className="mb-20 flex items-center justify-center overflow-hidden bg-white"
            >
              <img
                src={data.img}
                alt={data.name}
                className="h-[400px] w-full rounded-xl object-cover"
              />

              <div className="mt-2 flex flex-col">
                <h3 className="text-xl font-semibold">{data.name}</h3>
                <p className="text-gray-600">{data.country}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularCitySlider;
