import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import Header from "./components/Header";
import LogOut from "./pages/LogOut";
import EmailVerf from "./pages/EmailVerf";
import EmailConf from "./pages/EmailConf";



function App() {



   return (
      <div className="App">
         <Header />
         
         <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/login" element={<Login />} />
            
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/verify" element={<EmailVerf/>}/>
            <Route path="/user/confirmation" element={<EmailConf/>}/>

         </Routes>
      </div>
   );
}

export default App;
