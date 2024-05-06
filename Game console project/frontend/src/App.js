import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Products from "./pages/Product/product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Breadcrumb />
          <Routes>
            <Route path="/" element= {< Products />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
