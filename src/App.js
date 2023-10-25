import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/Signup';
function App() {
  return (
    <div className="App">
       {<Login/> }
      {<SignUp/>}
    </div>
  );
}

export default App;
