export default function HomePage() {
  return (
    <div className="px-4 md:px-12 lg:px-24">
      <h1 className="text-2xl font-semibold text-white">Home</h1>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-40 bg-gray-700 rounded" />
        <div className="h-40 bg-gray-700 rounded" />
        <div className="h-40 bg-gray-700 rounded" />
      </div>
    </div>
  );
}