export default function HomeCTA() {
  return (
    <section className="rounded-lg border p-6 md:p-10">
      <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Ready to start shopping?
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            CTA placeholder. Will be aligned to Figma later.
          </p>
        </div>

        <button className="px-5 py-3 rounded-md bg-gray-900 text-white hover:opacity-90 transition">
          Start Now
        </button>
      </div>
    </section>
  );
}
