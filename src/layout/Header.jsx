import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo / Brand */}
        <NavLink exact to="/" className="font-semibold text-lg">
          ProjectWiT
        </NavLink>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          <NavLink exact to="/" activeClassName="font-semibold underline">
            Home
          </NavLink>

          <NavLink to="/products" activeClassName="font-semibold underline">
            Shop
          </NavLink>

          {/* Placeholder links */}
          <span className="cursor-not-allowed text-gray-400">About</span>
          <span className="cursor-not-allowed text-gray-400">Blog</span>
          <span className="cursor-not-allowed text-gray-400">Contact</span>
          <span className="cursor-not-allowed text-gray-400">Pages</span>
        </nav>

        {/* Actions (placeholder) */}
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span className="cursor-not-allowed">Login</span>
          <span className="cursor-not-allowed">Search</span>
          <span className="cursor-not-allowed">Cart</span>
          <span className="cursor-not-allowed">Like</span>
        </div>
      </div>
    </header>
  );
}
