import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";

export default function PageContent() {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
  );
}