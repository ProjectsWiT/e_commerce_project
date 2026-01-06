import HeroSlider from "../components/HeroSlider";

export default function HomePage() {
  return (
    <>
      {/* Hero Slider (WT-16) */}
      <HeroSlider />

      {/* Page Content (WT-14 standardı) */}
      <section className="px-4 md:px-12 lg:px-24 py-10">
        <h1 className="text-3xl font-semibold text-white mb-6">
          Home
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-40 bg-gray-700 rounded" />
          <div className="h-40 bg-gray-700 rounded" />
          <div className="h-40 bg-gray-700 rounded" />
        </div>
      </section>
    </>
  );
}