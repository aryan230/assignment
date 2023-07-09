import ProductMain from "./Components/Product/ProductMain";
import "./css/main.css";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Order from "./Pages/Order";
import Product from "./Pages/Product";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Profile from "./Pages/Profile";
import AllOrders from "./Pages/AllOrders";
import ProductList from "./Pages/ProductList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/orders" element={<AllOrders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
