import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Groceries Delivered Fast",
    description: "Fresh groceries delivered to your door.",
    cta: "Start Now",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "Fresh Products Every Day",
    description: "Quality groceries delivered straight to your door.",
    cta: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "Best Prices Guaranteed",
    description: "Save more with our daily deals and discounts.",
    cta: "Discover",
    image:
      "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function HeroSlider() {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden">
      <Swiper
        className="w-full h-[420px] md:h-[480px] lg:h-[520px]"
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 h-full flex items-center">
                <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24 text-white">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {slide.title}
                  </h2>

                  <p className="max-w-md mt-4 text-base md:text-lg">
                    {slide.description}
                  </p>

                  <button className="mt-6 bg-blue-500 px-6 py-3 rounded hover:bg-blue-600 transition">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
