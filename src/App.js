import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import "./App.css";
import Header from "./components/Header";
import LogOut from "./pages/LogOut";
import EmailVerf from "./pages/EmailVerf";
import EmailConf from "./pages/EmailConf";
import Cart from "./pages/Cart";
import NotFound from "./components/404";
import PhonesAndTablets from "./categories/PhonesAndTablets";
import Males from "./categories/Males";
import Shoes from "./categories/Shoes";
import OtherCategories from "./categories/OtherCategories";
import Accessories from "./categories/Accessories";
import Electronics from "./categories/Electronics";
import Females from "./categories/Females";
import Laptops from "./categories/Laptops";
import Protected from "./HOC/Protected";
import Payments from "./components/checkout/Payments";
import OrderSummary from "./components/checkout/OrderSummary";
import ShippingAddressForm from "./components/checkout/ShippingAddressForm";
import EmptyCart from "./components/checkout/EmptyCart";
import OrderPayDetails from "./components/checkout/OrderPayDetails";
import ErrorPage from "./components/checkout/ErrorPage";
import Testing from "./components/checkout/testing";
import OrderPayConfirm from "./components/checkout/OrderPayConfirm.jsx";



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
            <Route path="/fashion/male" element={<Males />} />
            <Route path="/fashion/female" element={<Females />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/devices" element={<PhonesAndTablets />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/others" element={<OtherCategories />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/verify" element={<EmailVerf />} />
            <Route path="/user/confirmation" element={<EmailConf />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/test" element={<Testing />} />

            {/* 404 PAGE */}
            <Route path="*" element={<NotFound />} />

           {/* Protected Routes For Checkouts & Payments */}
            <Route path="/checkout/shipping" 
              element={
               <Protected>
                  <ShippingAddressForm />
               </Protected>
            } />

            <Route path="/checkout/payments" 
              element={
               <Protected>
                  <Payments />
               </Protected>
            } />
            
            <Route path='/checkout/placeorder' 
              element={
               <Protected>
                  <OrderSummary />
               </Protected>
            } />

            <Route path='/cart/emptycart' 
              element={
               <Protected>
                  <EmptyCart />
               </Protected>
            } />

            <Route path='/checkout/makepayment' 
              element={
               <Protected>
                  <OrderPayDetails />
               </Protected>
            } />

            <Route path='/checkout/confirmpay' 
              element={
               <Protected>
                  <OrderPayConfirm />
               </Protected>
            } />


         </Routes>
      </div>
   );
}

export default App;