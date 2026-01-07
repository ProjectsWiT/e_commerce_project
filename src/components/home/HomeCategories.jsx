export default function HomeCategories() {
  return (
    <section>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Categories</h2>
          <p className="mt-1 text-sm text-gray-500">
            Mobile-first skeleton. Category cards will be added hadsdasdasdere
            (T12).
          </p>
        </div>
        <span className="text-sm text-gray-500 cursor-not-allowed">
          View all
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="h-28 rounded-lg bg-gray-100" />
        <div className="h-28 rounded-lg bg-gray-100" />
        <div className="h-28 rounded-lg bg-gray-100" />
        <div className="h-28 rounded-lg bg-gray-100" />
      </div>
    </section>
  );
}
