import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Prooduct from "./Pages/Prooduct";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./Components/Footer/Footer";
import mensBanner from "./Components/Assets/banner_mens.png";
import womenBanner from "./Components/Assets/banner_women.png";
import kidBanner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={mensBanner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={womenBanner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kidBanner} category="kid" />}
          />
          <Route path="/product" element={<Prooduct />}>
            <Route path=":productId" element={<Prooduct />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
