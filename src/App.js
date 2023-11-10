import { Routes, Route, useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import "./App.css";
import Header from "./components/Header";
import LogOut from "./Pages/LogOut";
import BestDeals from "./Pages/BestDeals";
import EmailVerf from "./Pages/EmailVerf";
import EmailConf from "./Pages/EmailConf";
import Cart from "./Pages/Cart"; 
import NotFound from "./components/404";
// import AdminAuthForm from "./pages/adminAuth";
import AdminAuth from "./pages/AdminAuth"
import FavoritePage from "./Pages/FavoritePage";
import PhonesAndTablets from "./categories/PhonesAndTablets";
import Males from "./categories/Males";
import Shoes from "./categories/Shoes";
import OtherCategories from "./categories/OtherCategories";
import Accessories from "./categories/Accessories";
import Electronics from "./categories/Electronics";
import Females from "./categories/Females";
import Laptops from "./categories/Laptops";
import { useEffect } from "react";
import LatestArrivals from "./Pages/LatestArrivals";



function App() {

   useEffect(() => {
      AOS.init();
    }, [])

   return (
      <div className="App">
         <Header />

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/latest-arrivals" element={<LatestArrivals />} />
            <Route path="/best-deals" element={<BestDeals />} />
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
            <Route path="/auth"  element={<AdminAuth/>}/>
            <Route path="/user/confirmation" element={<EmailConf />} />

            <Route path="/favorite" element={<FavoritePage />} />

            {/* 404 PAGE */}
            <Route path="*" element={<NotFound />} />
         </Routes>
      </div>
   );
}

export default App;