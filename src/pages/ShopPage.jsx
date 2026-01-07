import ProductCard from "../components/ProductCard";

// MVP dummy data (ileride T13 ile thunk + API gelecek)
const products = [
  {
    id: 101,
    title: "Black T-Shirt",
    category: "Men",
    description: "Comfortable cotton t-shirt.",
    price: 19.99,
    image: "https://images.placeholders.dev/600x400",
  },
  {
    id: 102,
    title: "Running Shoes",
    category: "Women",
    description: "Lightweight shoes for everyday running.",
    price: 79.9,
    image: "https://images.placeholders.dev/600x400",
  },
  {
    id: 103,
    title: "Backpack",
    category: "Accessories",
    description: "Daily carry backpack with laptop sleeve.",
    price: 49.5,
    image: "https://images.placeholders.dev/600x400",
  },
];

export default function ShopPage() {
  return (
    <section>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Shop</h1>
          <p className="mt-1 text-sm text-gray-500">
            Browse products (MVP list). Real API will be integrated in T13–T15.
          </p>
        </div>

        {/* Filter/sort placeholders (T14) */}
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
          <span className="cursor-not-allowed">Sort</span>
          <span className="cursor-not-allowed">Filter</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
