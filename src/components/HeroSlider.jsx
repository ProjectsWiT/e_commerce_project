import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Groceries Delivered Fast",
    description:
      "We know how large objects will act, but things on a small scale.",
    cta: "Start Now",
  },
  {
    id: 2,
    title: "Fresh Products Every Day",
    description: "Quality groceries delivered straight to your door.",
    cta: "Shop Now",
  },
  {
    id: 3,
    title: "Best Prices Guaranteed",
    description: "Save more with our daily deals and discounts.",
    cta: "Discover",
  },
];

export default function HeroSlider() {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-gray-800 overflow-hidden">
      <Swiper
        className="w-full h-[420px] md:h-[480px] lg:h-[520px]"
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="!w-full">
            <div className="h-full flex items-center">
              {/* İç container */}
              <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24 text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  {slide.title}
                </h2>

                <p className="mt-4 max-w-xl text-white/80">
                  {slide.description}
                </p>

                <button className="mt-6 bg-blue-500 px-6 py-3 rounded">
                  {slide.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
