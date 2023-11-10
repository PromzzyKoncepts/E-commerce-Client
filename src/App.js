import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import Header from "./components/Header";
import LogOut from "./pages/LogOut";
import EmailVerf from "./pages/EmailVerf";
import EmailConf from "./pages/EmailConf";
import Cart from "./pages/Cart";
import NotFound from "./components/404";
// import AdminAuthForm from "./pages/adminAuth";
import AdminAuth from "./pages/AdminAuth"



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
            <Route path="/verify" element={<EmailVerf/>}/>
            <Route path="/user/confirmation" element={<EmailConf/>}/>
            <Route path="/auth"  element={<AdminAuth/>}/>

            {/* 404 PAGE */}
            <Route path="*" element={<NotFound />} />

            {/* 404 PAGE */}
            <Route path="*" element={<NotFound />} />

         </Routes>
      </div>
   );
}

export default App;