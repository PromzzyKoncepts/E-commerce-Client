import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import Header from "./components/Header";
import LogOut from "./pages/LogOut";
import Cart from "./pages/Cart";
import NotFound from "./components/404";
import ShippingAddressForm from "./components/ShippingAddressForm";
import OrderSummary from "./components/OrderSummary";
import Protected from "./HOC/Protected";



function App() {



   return (
      <div className="App">
         <Header />
         
         <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<LogOut />} />

            {/* 404 PAGE */}
            <Route path="*" element={<NotFound />} />

           {/* Protected Routes For Checkouts & Payments */}
            <Route path="/checkout/shipping" 
              element={
               <Protected>
                  <ShippingAddressForm />
               </Protected>
            } />
            
            <Route path='/checkout/order-summary' 
              element={
               <Protected>
                  <OrderSummary />
               </Protected>
            } />

         </Routes>
      </div>
   );
}

export default App;