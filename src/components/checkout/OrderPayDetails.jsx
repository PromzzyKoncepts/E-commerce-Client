import { useSelector } from 'react-redux';
import AphiaLogo from '../../assets/aphia.png';
import { Link } from 'react-router-dom';

function OrderPayDetails() {
  const order = useSelector((state) => state.order.order);

  return (
    <div
      data-aos="fade-up"
      className="max-w-sm mx-auto w-full p-6 mt-10 bg-white rounded shadow-md"
    >
      <img src={AphiaLogo} alt="Aphia logo" className="w-12" />

      <p className="text-sm font-semibold text-amber-500 mb-4 mt-4">
        Please proceed to your mobile banking app to complete your payment to
        Aphia
      </p>

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
      </div>

      <div className="flex justify-center mt-4">
        <button>
          <Link
            className="bg-amber-500 text-white py-2 px-4 rounded no-underline hover:underline"
            to="/checkout/confirmpay"
          >
            I have completed the transfer
          </Link>
        </button>
      </div>
    </div>
  );
}

export default OrderPayDetails;
