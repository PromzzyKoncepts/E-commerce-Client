import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../../redux/features/paymentSlice";
import CheckoutSteps from "./CheckoutSteps";

const Payment = () => {
    const shippingAddress = useSelector((state) => state.shippingAddress);
    const paymentMethodFromStore = useSelector((state) => state.payment);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [paymentMethod, setPaymentMethod] = useState(paymentMethodFromStore);
    const [error, setError] = useState("");

    if (!shippingAddress) {
        navigate("/checkout/shipping");
    }

    const handlePaymentMethodChange = (selectedMethod) => {
        setPaymentMethod(selectedMethod);
    };

    const handleContinue = () => {
        if (paymentMethod) {
            dispatch(savePaymentMethod(paymentMethod));
            navigate("/checkout/shipping");
        } else {
            setError("You must choose a payment method");
        }
    };


    return (
        <div className="flex items-center justify-center pt-5">
            <form className="max-w-xl w-full p-5 bg-white rounded shadow-xl relative">
                <div className="absolute -top-2 left-20">
                    <CheckoutSteps />
                </div>
                <p className="text-xl text-amber-500 font-medium pb-2">Payment Method</p>
                <div className="mb-4">
                    <label className="block text-lg font-semibold pb-1">Select Method</label>
                    <div>
                        <input
                            type="radio"
                            id="bankTransfer"
                            name="paymentMethod"
                            value="Bank Transfer"
                            checked={paymentMethod === "Bank Transfer"}
                            onChange={() => handlePaymentMethodChange("Bank Transfer")}
                            className="mr-2"
                        />
                        <label htmlFor="bankTransfer">Bank Transfer</label>
                    </div>
                </div>

                {error && <div className="text-red-500">{error}</div>}
                <div className="pt-4 flex justify-between text-xs">
                    <button
                        className="px-4 py-1 text-amber-500 from-neutral-600 tracking-wider rounded hover:bg-amber-500 hover:text-white"
                        type="button"
                        onClick={handleContinue}
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
                        className="px-4 py-1 text-amber-500 from-neutral-600 tracking-wider rounded hover:bg-amber-500 hover:text-white"
                        type="button"
                        style={{ marginLeft: "auto" }}
                        onClick={() => navigate("/checkout/placeorder")}
                    >
                        CONTINUE
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Payment;
