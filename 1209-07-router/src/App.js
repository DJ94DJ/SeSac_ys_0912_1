import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hompage from "./pages/HomePage";
import Productpage from "./pages/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Photopage from "./pages/PhotoPage";
import PhotoDetailPage from "./pages/PhotoDetailpage";

function App() {
  return (
    <>
      {/* Routes, Route 감싸야 함. */}
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Hompage />} />
            <Route path="/photos/" element={<Photopage />} />
            <Route path="/photos/:id" element={<PhotoDetailPage />} />
            <Route path="/products/" element={<Productpage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
