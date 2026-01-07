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
    description:
      "Quality groceries delivered straight to your door.",
    cta: "Shop Now",
  },
  {
    id: 3,
    title: "Best Prices Guaranteed",
    description:
      "Save more with our daily deals and discounts.",
    cta: "Discover",
  },
];

export default function HeroSlider() {
  return (
    <section className="w-full bg-gray-800">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="h-[420px] md:h-[480px] lg:h-[520px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  {slide.title}
                </h2>

                <p className="mt-4 max-w-xl text-white/80">
                  {slide.description}
                </p>

                <button className="mt-6 inline-block bg-blue-500 px-6 py-3 rounded">
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