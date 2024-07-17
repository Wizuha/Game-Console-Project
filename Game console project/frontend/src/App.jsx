import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Products from "./pages/Product/product";
import { MyProvider } from "./context/searchContext";
import ProductDetails from "./pages/InfoProduct/ProductDetails";
import Purchases from "./pages/Purchases/Purchases";
function App() {
  return (
    <div className="app">
      <MyProvider>
        <BrowserRouter>
          <Layout>
            <Breadcrumb />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/product/:id_console" element={<ProductDetails />} />
              <Route path="/achats" element={<Purchases />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </MyProvider>
    </div>
  );
}

export default App;
