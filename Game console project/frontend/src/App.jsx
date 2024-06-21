import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Products from "./pages/Product/product";
import SearchContext, { MyProvider } from "./context/searchContext";
function App() {
  return (
    <>
      <MyProvider>
        <BrowserRouter>
          <Layout>
            <Breadcrumb />
            <Routes>
              <Route path="/" element={<Products />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </MyProvider>
    </>
  );
}

export default App;
