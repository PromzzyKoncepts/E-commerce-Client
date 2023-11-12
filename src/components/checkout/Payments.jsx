import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bankTransferMethod, paymentError } from "../../redux/features/paymentSlice";
import CheckoutSteps from "./CheckoutSteps";

const Payment = () => {
    const shippingAddress = useSelector((state) => state.shippingAddress);
    const payment = useSelector((state) => state.payment); // Access the payment state
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (!shippingAddress) {
        navigate("/checkout/shipping");
    }

    const handlePaymentMethodChange = () => {
        //set the payload structure
        dispatch(bankTransferMethod({ id: 1, checked: true, value: "Bank Transfer" }));

        // Clear any existing errors when changing the payment method
        dispatch(paymentError(""));
    };

    const handleContinue = () => {
        if (payment.checked) {
            navigate("/checkout/placeorder");
        } else {
            // Set a payment error message
            dispatch(paymentError("You must choose a payment method"));
        }
    };

    return (
      <div data-aos="fade-up" className="flex items-center justify-center pt-5">
        <form className="max-w-xl w-full p-5 bg-white rounded shadow-xl relative">
          <div className="absolute -top-2 left-20">
            <CheckoutSteps />
          </div>
          <p className="text-xl text-amber-500 font-medium pb-2">
            Payment Method
          </p>
          <div className="mb-4">
            <label className="block text-lg font-semibold pb-1">
              Select Method
            </label>
            <div>
              <input
                type="radio"
                name="bankTransfer"
                checked={payment.checked === true}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              <label htmlFor="bankTransfer">Bank Transfer</label>
            </div>
          </div>

          {payment.error && <div className="text-red-500">{payment.error}</div>}
          <div className="pt-4 flex justify-between text-xs">
            <button
              className="p-2 text-amber-500 from-neutral-600 tracking-wider  hover:bg-amber-500 hover:text-white"
              type="button"
              onClick={() => navigate("/checkout/shipping")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>

            <button
              className="p-2 text-amber-500 from-neutral-600 tracking-wider hover:bg-amber-500 hover:text-white"
              type="button"
              style={{ marginLeft: "auto" }}
              onClick={handleContinue}
            >
              CONTINUE
            </button>
          </div>
        </form>
      </div>
    );
};

export default Payment;
