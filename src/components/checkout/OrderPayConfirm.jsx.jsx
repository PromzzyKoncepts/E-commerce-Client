import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AphiaLogo from '../../assets/aphia.png';
import { Link } from 'react-router-dom';

const OrderPayConfirm = () => {
    const [remainingTime, setRemainingTime] = useState(null); // Initialize RemainingTime as null
    const [expired, setExpired] = useState(false);
    const order = useSelector((state) => state.order.order);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the time remaining
      const expirationTime = new Date(order.paymentInitiation.meta.authorization.account_expiration).getTime();
      const currentTime = new Date().getTime();
      const remainingTime = expirationTime - currentTime;

      if (remainingTime <= 0) {
        // Time has expired
        setExpired(true);
        clearInterval(interval);
      } else {
        // Update the time remaining
        setRemainingTime(remainingTime);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [order.paymentInitiation.meta.authorization.account_expiration]);

  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div data-aos="fade-up" className="max-w-xs  mx-auto w-full p-6 mt-10 bg-white rounded shadow-md">
      <img src={AphiaLogo} alt="Aphia logo" className="w-12" />
    
      <p className="text-sm font-semibold text-amber-500 mb-4 mt-4">Please proceed to your mobile banking app to complete your payment to Aphia</p>

      <div className="grid grid-cols-2 gap-2 mt-4">

        <div className="text-left border-b mb-2 text-base sm:text-sm">
          <span className="font-semibold">Amount:</span>
        </div>
        <div className="text-right border-b mb-2 text-base sm:text-sm font-semibold">
          NGN {order.paymentInitiation.meta.authorization.transfer_amount}
        </div>

        <div className="text-left border-b mb-2 text-base sm:text-sm">
          <span className="font-semibold">Account Number:</span>
        </div>
        <div className="text-right border-b mb-2 text-base sm:text-sm font-semibold">
          {order.paymentInitiation.meta.authorization.transfer_account}
        </div>

        <div className="text-left border-b mb-2 text-base sm:text-sm">
          <span className="font-semibold">Bank:</span>
        </div>
        <div className="text-right border-b mb-2 text-base sm:text-sm font-semibold">
          {order.paymentInitiation.meta.authorization.transfer_bank}
        </div>
        <div className="text-left border-b mb-2 text-base sm:text-sm">
          <span className="font-semibold">Time remaining:</span>
        </div>
        <div className="text-right border-b mb-2 text-base sm:text-sm font-semibold">
            {minutes} :  {seconds}
        </div>
      </div>

      {expired && (
        <div className="text-red-500 text-sm mt-4 text-center">
          Order has expired. <Link to="/" className='text-amber-500 ml-4' > Back to Shopping.</Link> 
        </div>
    )}

      {!expired && (
        <button className="bg-amber-500 text-white py-2 px-4 rounded mt-4 block mx-auto">
          I have completed the transfer
        </button>
      )}
    </div>
  );
}

export default OrderPayConfirm;