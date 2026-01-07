import { useParams, Link } from "react-router-dom";

export default function ProductDetailPage() {
  const { productId } = useParams();

  return (
    <section>
      <h1 className="text-2xl font-semibold text-gray-900">Product Detail</h1>
      <p className="mt-2 text-sm text-gray-500">Product ID: {productId}</p>

      <Link
        to="/shop"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        ← Back to Shop
      </Link>
    </section>
  );
}
