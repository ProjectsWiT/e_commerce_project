import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="h-[420px] md:h-[520px] lg:h-[600px]"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div
            className="relative h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1542838132-92c53300491e)",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Groceries Delivery
                </h1>

                <p className="max-w-md mb-6 text-base md:text-lg">
                  Fresh groceries delivered to your door.
                </p>

                <button className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 transition">
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 (placeholder) */}
        <SwiperSlide>
          <div className="h-full bg-gray-900 flex items-center justify-center text-white text-3xl">
            Slide 2
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}