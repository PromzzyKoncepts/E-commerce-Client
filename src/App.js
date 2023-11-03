import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import Header from "./components/Header";
import LogOut from "./pages/LogOut";
import BestDeals from "./pages/BestDeals";
import BestDealsShortcut from "./components/BestDealsShortcut";



function App() {



   return (
      <div className="App">
         <Header />
         
         
         <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/login" element={<Login />} />
            
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/best-deals" element={<BestDeals />} />

         </Routes>
      </div>
   );
}

export default App;
