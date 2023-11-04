import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updatePaymentMethod } from "../../redux/features/paymentsSlice";
import CheckoutSteps from "./CheckoutSteps"; // Make sure to import CheckoutSteps if needed.

const Payment = () => {
    const shippingAddress = useSelector((state) => state.shippingAddress);
    const navigate = useNavigate();

    if (!shippingAddress) {
        navigate("/checkout/shipping");
    }

    const [paymentMethod, setPaymentMethod] = useState("bankTransfer");

    const dispatch = useDispatch();

    const handleNav = () => {
        dispatch(updatePaymentMethod(paymentMethod));
        navigate("/checkout/shipping");
      };

    return (
        <div className="flex items-center justify-center pt-5">
            <form className="max-w-xl w-full p-5 bg-white rounded shadow-xl relative">
                <div className='absolute -top-2 left-20'>
                    <CheckoutSteps />
                </div>
                <p className=" text-xl text-amber-500 font-medium pb-2">Payment Method</p>
                <div className="mb-4">
                    <label className="block text-lg font-semibold">Select Method</label>
                    <div>
                        <input
                            type="radio"
                            id="bankTransfer"
                            name="paymentMethod"
                            value="Bank Transfer"
                            checked={paymentMethod === "bankTransfer"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="mr-2"
                        />
                        <label htmlFor="bankTransfer">Bank Transfer</label>
                    </div>
                </div>

                <div className="pt-4 flex justify-between text-xs">
                    <button
                        className="px-4 py-1 text-amber-500 from-neutral-600 tracking-wider rounded hover:bg-amber-500 hover:text-white"
                        type="button" 
                        onClick={handleNav} 
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                    </button>
                    
                    <button
                        className="px-4 py-1 text-amber-500 from-neutral-600 tracking-wider rounded hover:bg-amber-500 hover:text-white"
                        type="button"
                        style={{ marginLeft: 'auto' }}
                        onClick={() => navigate('/checkout/placeorder')}
                    >
                        CONTINUE
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Payment;
