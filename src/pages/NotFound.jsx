import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="mt-2 text-gray-600">Page not found.</p>
      <Link className="mt-4 inline-block underline" to="/">
        Go Home
      </Link>
    </div>
  );
}
