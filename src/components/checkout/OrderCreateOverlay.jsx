import React, { useEffect, useState } from 'react';
import SuccessGif from '../../assets/success-gif.gif';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './Spinner';
import { signOut } from '../../redux/features/authSlice';
import TimeOutGif from '../../assets/error-occ.gif';
import ErrorFailGif from '../../assets/error.gif';

const OrderCreateOverlay = ({ orderState, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showExpiredMessage, setShowExpiredMessage] = useState(false);
  const order = useSelector((state) => state.order); // Get the entire order state

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleExpiredTimeout = () => {
      dispatch(signOut());
      setIsLoading(false);
      navigate('/login');
      setShowExpiredMessage(true);
    };

    if (orderState === 'loading' && order.order && order.order.success === null) {
      setIsLoading(true);
    } else if (orderState === 'success' && order.order && order.order.success === true) {
      setShowExpiredMessage(false);
      setIsLoading(false);
    } else if (
      orderState === 'success' &&
      order.order &&
      order.order.success === false &&
      order.order.message === 'jwt expired'
    ) {
      const timeout = setTimeout(handleExpiredTimeout, 5000);
      return () => clearTimeout(timeout);
    } else if (
      orderState === 'failed'
    ) {
      setIsLoading(false);
    }
  }, [orderState, navigate, dispatch, order]);

  useEffect(() => {
    if (!isLoading && 
      orderState === 'success' && 
      order.order.success === true && 
      order.order.paymentInitiation.status === "success" ) {
      const timeoutId = setTimeout(() => {
        navigate('/checkout/makepayment');
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [isLoading, orderState, order, navigate]);

  const renderTimeoutMessage = (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
        <h2 className="text-lg font-bold text-red-500 mb-4">Your Session has Expired</h2>
        <img className="block mx-auto w-32" src={TimeOutGif} alt="error-timeout" />
        <p className="text-gray-700 mt-2 mb-4 text-sm">
          You have been redirected to log in to continue.
        </p>
      </div>
    </div>
  );

  const renderSuccessMessage = (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
        <img className="block mx-auto w-32" src={SuccessGif} alt="error-timeout" />
        <h2 className="text-base font-bold text-cyan-400 mb-4 pt-3">
          Your order has been created successfully.
        </h2>
      </div>
    </div>
  );

  const renderErrorMessage = (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
        <h2 className="text-lg font-bold text-red-500 mb-4">Oops!! An Error just occurred..</h2>
        <img className="block mx-auto w-32" src={ErrorFailGif} alt="error-timeout" />
        <p className="text-red-500 mt-2 mb-4 text-sm">
          Check your internet connectivity
        </p>
        <button
          onClick={onClose}
          className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600 mt-4"
        >
          Continue
        </button>
      </div>
    </div>
  );

  return (
    <>
      {isLoading && <Spinner />}
      {showExpiredMessage && renderTimeoutMessage}
      {!isLoading && orderState === 'success' && order.order.success === true && order.order.paymentInitiation.status === "success" && renderSuccessMessage}
      {!isLoading && orderState === 'failed'&& renderErrorMessage}
    </>
  );
};

export default OrderCreateOverlay;
