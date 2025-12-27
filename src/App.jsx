import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((s) => s.app.loading);

  return (
    <Router>
      {/* Layout wrapper */}
      <div className="min-h-screen flex flex-col">
        {/* Single global header */}
        <Header />

        {/* Page content */}
        <main className="flex-1">
          <div className="max-w-4xl mx-auto">
            {/* Debug button (geçici) */}
            <button
              className="ml-auto mt-4 px-3 py-1 border rounded"
              onClick={() =>
                dispatch({ type: "APP/SET_LOADING", payload: !loading })
              }
            >
              loading: {String(loading)}
            </button>

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/products" component={Products} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </main>

        {/* Single global footer */}
        <Footer />
      </div>
    </Router>
  );
}
