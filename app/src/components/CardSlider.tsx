import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const CardSlider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const swiperRef = React.useRef<SwiperType>();

  return (
    <div className="relative h-full">
      <div className="m-0 h-full bg-gray-100 p-0 font-sans text-sm text-black">
        <Swiper
          slidesPerView={3}
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
          className="h-full w-full"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center bg-white text-center text-lg"
            >
              {children}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardSlider;
