import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emptyCartImage from '../../assets/emptycart.png'

const EmptyCart = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!showOverlay) {
      navigate('/');
    }
  }, [showOverlay, navigate]);

  const handleOverlay = () => {
    setShowOverlay(false);
  };
  
  return (
    <div className="flex items-center justify-center h-screen">
      {showOverlay && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-100">
          <div data-aos="fade-up" className="bg-white p-6 rounded-lg text-center shadow-lg">
          <img
              src={emptyCartImage}
              alt="Empty Cart"
              style={{
                display: 'block',
                margin: '0 auto',
                width: '80px', 
              }}
            />
            <h1 className="text-xl font-semibold">Your cart is empty.</h1>
            <p className="text-gray-400 text-sm ">You have not added any item to your cart.</p>
            <button
              className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-400 mt-4"
              onClick={handleOverlay}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmptyCart;
