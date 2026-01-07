import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { id, title, category, description, price, image } = product;

  return (
    <article className="border rounded-lg overflow-hidden bg-white">
      <div className="relative">
        {image ? (
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        ) : (
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">
            Image
          </div>
        )}

        {/* UI placeholder */}
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded">
          NEW
        </span>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <p className="text-xs text-gray-500">{category}</p>

        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {title}
        </h2>

        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">
            ${Number(price || 0).toFixed(2)}
          </span>

          <Link
            to={`/shop/${id}`}
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            View →
          </Link>
        </div>
      </div>
    </article>
  );
}
