import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";

export default function App() {
  return (
    <Router>
      <div className="max-w-4xl mx-auto">
        <nav className="p-4 flex gap-4 border-b">
          <NavLink exact to="/" activeClassName="font-semibold underline">
            Home
          </NavLink>
          <NavLink to="/products" activeClassName="font-semibold underline">
            Products
          </NavLink>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
