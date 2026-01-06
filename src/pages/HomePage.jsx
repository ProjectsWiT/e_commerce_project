export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-white">
        Home
      </h1>

      {/* WT-14 | Desktop Breakpoints Section */}
      <section className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-40 bg-gray-700 rounded" />
          <div className="h-40 bg-gray-700 rounded" />
          <div className="h-40 bg-gray-700 rounded" />
        </div>
      </section>
    </div>
  );
}