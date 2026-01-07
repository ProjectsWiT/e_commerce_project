export default function HomeProductGrid() {
  return (
    <section className="px-4 md:px-12 lg:px-24 py-16">
      <h2 className="text-2xl font-semibold text-white mb-8">
        Popular Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow"
          >
            <div className="h-40 bg-gray-200 rounded mb-4" />
            <h3 className="text-gray-900 font-medium mb-1">
              Product Name
            </h3>
            <p className="text-gray-500">$29.99</p>
          </div>
        ))}
      </div>
    </section>
  );
}