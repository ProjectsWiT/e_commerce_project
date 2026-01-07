export default function HomeBrands() {
  return (
    <section className="rounded-lg bg-gray-50 p-6">
      <h2 className="text-xl font-semibold text-gray-900">Brands</h2>
      <p className="mt-1 text-sm text-gray-500">
        Brand strip placeholder (logos will be aligned later).
      </p>

      <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-4">
        <div className="h-10 rounded bg-gray-200" />
        <div className="h-10 rounded bg-gray-200" />
        <div className="h-10 rounded bg-gray-200" />
        <div className="h-10 rounded bg-gray-200" />
        <div className="h-10 rounded bg-gray-200" />
        <div className="h-10 rounded bg-gray-200" />
      </div>
    </section>
  );
}
