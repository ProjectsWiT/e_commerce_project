import ProductCard from "../ProductCard";

const dummy = [
  {
    id: 201,
    title: "Featured Product",
    category: "Women",
    description: "Placeholder description for MVP layout.",
    price: 49.99,
    image: "https://images.placeholders.dev/600x400",
  },
  {
    id: 202,
    title: "Featured Product",
    category: "Men",
    description: "Placeholder description for MVP layout.",
    price: 59.99,
    image: "https://images.placeholders.dev/600x400",
  },
  {
    id: 203,
    title: "Featured Product",
    category: "Accessories",
    description: "Placeholder description for MVP layout.",
    price: 29.99,
    image: "https://images.placeholders.dev/600x400",
  },
];

export default function HomeProducts() {
  return (
    <section>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Featured</h2>
          <p className="mt-1 text-sm text-gray-500">
            Product grid skeleton. Real data comes with T13.
          </p>
        </div>
        <span className="text-sm text-gray-500 cursor-not-allowed">
          See more
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummy.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
