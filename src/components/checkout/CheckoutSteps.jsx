import React from 'react';
import { Navigate } from 'react-router-dom';

const activeStepClasses = 'bg-amber-500 text-white';
const inactiveStepClasses = 'text-amber-500  bg-amber-50';

const CheckoutSteps = ({ step1, step2, step3 }) => {

    
    return (
        <nav className="bg-amber-50 py-1 max-w-3xl">
                <div>
                    {step1 ? (
                        <Navigate to="/checkout/shipping" className={`px-4 py-2 rounded-lg ${activeStepClasses}`}>
                            Shipping
                        </Navigate>
                    ) : (
                        <span className={`px-4 py-2 rounded-lg ${inactiveStepClasses}`}>Shipping</span>
                    )}
                </div>
                <div >
                    {step2 ? (
                        <Navigate to="/checkout/payment" className={`px-4 py-2 rounded-lg ${activeStepClasses}`}>
                            Payment
                        </Navigate>
                    ) : (
                        <span className={`px-4 py-2 rounded-lg ${inactiveStepClasses}`}>Payment</span>
                    )}
                </div>
                <div>
                    {step3 ? (
                        <Navigate to="/checkout/placeorder" className={`px-4 py-2 rounded-lg ${activeStepClasses}`}>
                            Place Order
                        </Navigate>
                    ) : (
                        <span className={`px-4 py-2 rounded-lg ${inactiveStepClasses}`}>Place Order</span>
                    )}
                </div>
        </nav>
    );
};

export default CheckoutSteps;
