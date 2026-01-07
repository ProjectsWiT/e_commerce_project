import { BrowserRouter as Router } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <Header />
        <PageContent>
          <AppRoutes />
        </PageContent>
        <Footer />
      </div>
    </Router>
  );
}
