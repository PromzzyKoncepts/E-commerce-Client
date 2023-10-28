import './App.css';
import Males from './pages/Males';
import Cart from './pages/Cart';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <header className='flex items-center justify-between'>
        <Link to='/'>Aphia</Link>
        <Link to='/cart'>Cart</Link>
      </header>
      <Routes>
        <Route path='/' element={<Males />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
