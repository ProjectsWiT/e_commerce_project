import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[420px] md:h-[520px]">
      {}
      <img
        src="/images/hero-food.png"
        alt="Groceries Delivery"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {}
      <div className="absolute inset-0 bg-black/30" />

      {}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          GROCERIES DELIVERY
        </h1>

        <p className="mt-4 max-w-xl text-sm md:text-base text-white/90">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </p>

        <button className="mt-6 bg-sky-500 hover:bg-sky-600 transition px-8 py-3 rounded-md font-semibold">
          Start Now
        </button>
      </div>

      {}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
        <ChevronLeft size={32} />
      </button>

      {}
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white">
        <ChevronRight size={32} />
      </button>

      {}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        <span className="w-8 h-1 bg-white rounded"></span>
        <span className="w-8 h-1 bg-white/50 rounded"></span>
        <span className="w-8 h-1 bg-white/50 rounded"></span>
      </div>
    </section>
  );
}
