import React from 'react';

function OrderSummary() {

    const orderItems = [
        {
            name: "Product 1",
            price: 25.99,
            quantity: 2,
        },
        {
            name: "Product 2",
            price: 14.99,
            quantity: 3,
        },
    ];

    const total = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
            <div className="max-w-xl mt-11 m-auto p-6 bg-white rounded shadow-xl">
            <p className="text-gray-800 font-medium">Order Summary</p>
            <ul>
                {orderItems.map((item, index) => (
                    <li key={index} className="flex justify-between">
                        <span>{item.name}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-4 flex justify-between">
                <span className="text-gray-600">Total:</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <div className="mt-4 flex justify-center">
                    <button
                        className="px-4 py-1 pb-2 text-slate-950 from-neutral-600 tracking-wider bg-amber-500 rounded"
                        type="submit"
                    >
                        PAY
                    </button>
                </div>
        </div>
    );
}

export default OrderSummary;
