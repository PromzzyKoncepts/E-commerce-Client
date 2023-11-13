import React from 'react';
import { Link } from 'react-router-dom';

const activeStepClasses = 'bg-amber-500 text-white';
const inactiveStepClasses = 'text-amber-500 bg-amber-50';

const Step = ({ to, label, isActive }) => (
    <div>
        {isActive ? (
            <Link to={to} className={`px-4 py-2 rounded-lg ${activeStepClasses}`}>
                {label}
            </Link>
        ) : (
            <span className={`px-4 py-2 rounded-lg ${inactiveStepClasses}`}>{label}</span>
        )}
    </div>
);

const CheckoutSteps = ({ step1, step2, step3 }) => {
    return (
        <nav className="flex">
            <Step to="/checkout/shipping" label="1. Shipping" isActive={step1} />
            <Step to="/checkout/payment" label="2. Payment" isActive={step2} />
            <Step to="/checkout/placeorder" label="3. Place Order" isActive={step3} />
        </nav>
    );
};

export default CheckoutSteps;
