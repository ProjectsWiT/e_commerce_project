export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 py-20">
      {}
      <img
        src="/images/hero-food.png"
        alt="Groceries Delivery"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {}
      <div className="absolute inset-0 bg-black/40" />

      {}
      <div className="relative z-10 flex flex-col gap-4 text-white max-w-md">
        <h1 className="text-3xl font-bold">
          Groceries Delivery
        </h1>

        <p className="text-sm text-white/90">
          We know how large objects will act, but things on a small scale just do
          not act that way.
        </p>

        <button className="self-center bg-blue-500 px-6 py-3 rounded-md font-semibold">
          Start Now
        </button>
      </div>
    </section>
  );
}
