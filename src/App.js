import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<SignUp />}/>
        </Routes>
    </div>
  );
}

export default App;
