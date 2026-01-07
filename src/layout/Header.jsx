import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24 h-14 flex items-center justify-between">
        {/* Brand */}
        <NavLink exact to="/" className="font-semibold text-lg text-gray-900">
          ProjectWiT
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <NavLink
            exact
            to="/"
            activeClassName="font-semibold text-gray-900 underline"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            activeClassName="font-semibold text-gray-900 underline"
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="font-semibold text-gray-900 underline"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="font-semibold text-gray-900 underline"
          >
            Contact
          </NavLink>
          <NavLink
            to="/team"
            activeClassName="font-semibold text-gray-900 underline"
          >
            Team
          </NavLink>
        </nav>

        {/* Actions (MVP placeholders) */}
        <div className="flex items-center gap-3 text-sm text-gray-500">
          {/* Mobile: tek placeholder */}
          <span className="md:hidden cursor-not-allowed">Menu</span>

          {/* Desktop: placeholder aksiyonlar */}
          <span className="hidden md:inline cursor-not-allowed">Search</span>
          <span className="hidden md:inline cursor-not-allowed">Cart</span>
          <span className="hidden md:inline cursor-not-allowed">Login</span>
        </div>
      </div>
    </header>
  );
}
