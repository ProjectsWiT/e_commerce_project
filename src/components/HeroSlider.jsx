import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HeroSlider() {
  return (
    <div className="w-full bg-gray-800">
      <Swiper loop className="h-[420px]">
        <SwiperSlide>
          <div className="h-full flex items-center justify-center text-white text-3xl">
            Slide 1
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full flex items-center justify-center text-white text-3xl">
            Slide 2
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}