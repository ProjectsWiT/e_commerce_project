export default function HomeFeatures() {
  return (
    <section className="px-4 md:px-12 lg:px-24 py-16 bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl p-8 text-center shadow-sm">
          <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-red-600 text-2xl font-bold"></span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Unique Life
          </h3>
          <p className="text-gray-500">
            Explore items from different categories and discover new tastes.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl p-8 text-center shadow-sm">
          <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 text-2xl font-bold"></span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Elements Style
          </h3>
          <p className="text-gray-500">
            Carefully designed components with a modern and clean style.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl p-8 text-center shadow-sm">
          <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-green-600 text-2xl font-bold"></span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Fast Delivery
          </h3>
          <p className="text-gray-500">
            Get your groceries delivered quickly and safely to your door.
          </p>
        </div>
      </div>
    </section>
  );
}
