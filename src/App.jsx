import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./views/Home";
import { MyCart } from "./views/MyCart";
import { BestSales } from "./views/BestSales";
import { InOffers } from "./views/InOffer";
import { AllProducts } from "./views/AllProducts";
import { Categories } from "./views/Categories";
import { Product } from "./views/Product";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/My_cart" element={<MyCart />} />
        <Route path="/Best_sales/page/:page" element={<BestSales />} />
        <Route path="/In_offers/page/:page" element={<InOffers />} />
        <Route path="/All_products/page/:page" element={<AllProducts />} />
        <Route path="/Category/:category/page/:page" element={<Categories />} />
        <Route path="/Product/:id" element={<Product />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;