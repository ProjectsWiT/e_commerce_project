import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h1 className="text-2xl font-semibold text-gray-900">404</h1>
      <p className="mt-2 text-sm text-gray-500">Page not found.</p>
      <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Go Home →
      </Link>
    </section>
  );
}
