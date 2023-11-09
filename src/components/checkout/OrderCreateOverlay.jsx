import React, { useEffect, useState } from 'react';
import SuccessGif from '../../assets/sucess-gif.gif';
import ErrorPage from './ErrorPage';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OrderCreateOverlay = ({ orderState, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showExpiredMessage, setShowExpiredMessage] = useState(false);
  const order = useSelector((state) => state.order.order)
  const navigate = useNavigate();

  useEffect(() => {
    if (orderState === 'loading') {
      setIsLoading(true);
    } else if (orderState === 'failed' && orderState.message === 'jwt expired') {

      // Show the message for JWT expiration
      setShowExpiredMessage(true);

      // After 5 seconds, log out the user and navigate to the login page
      const timeout = setTimeout(() => {
        // Implement user logout mechanism, e.g., clear user session, remove tokens, etc.
        // For example, if you are using Redux, dispatch a logout action.
      setIsLoading(false)
        // Navigate to the login page
        navigate('/login');

        // Clean up by hiding the message
        setShowExpiredMessage(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [orderState, navigate]);



  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center">
            <div className="flex items-center flex-col">
              <div className='p-8 w-10/12 mx-auto flex items-center justify-center h-[70vh]'>
                <p className='animate-spin h-5 w-5 border-2 border-zinc-800 border-x-transparent rounded-full p-4 '></p>
                <p className=" text-gray-700 text-xs">Loading... Please wait.</p>
              </div>
            </div>
          </div>
        </div>

      )}
      {showExpiredMessage && (
        <div className="flex items-center justify-center mb-4">
          <p className="text-red-700">
            Timeout Expired. You need to log in.
          </p>
        </div>
      )}

      {!isLoading && orderState === 'success' && order.paymentInitiation.status === "success"(
        <div className="flex flex-col items-center justify-center mt-10">
          <img className='w-40' src={SuccessGif} alt="check-sussess" />
          <p className="mt-1 text-green-700 text-lg font-semibold">
            Your order has been created successfully.
          </p>
          {/*a success message for 3 seconds before displaying payment details */}
          {setTimeout(() => {
            navigate('/checkout/makepayment');
          }, 3000)}
        </div>
        )}

{/* {
  !isLoading && orderState === 'success' && (
    <div className="flex items-center justify-center mb-4">
      <img src={SuccessGif} alt="check-sussess" />
      <p className="ml-2 text-green-700">
        Your Order created successfully.
      </p>
      {/* Show success message for 5 seconds before displaying order details */} {/*</>
      {setTimeout(() => {
        navigate('/checkout/makepayment');
      }, 3000)}
    </div>
  )
} */}

{
  !isLoading && orderState === 'failed' && (
    <div className="flex items-center justify-center mb-4">
      <ErrorPage />
    </div>
  )
}

{/* <button
  onClick={onClose}
  className="bg-amber-500 text-white py-2 px-4 rounded hover-bg-amber-600 mt-4"
>
  Close
</button> */}
 </>  
  );
};

export default OrderCreateOverlay;
