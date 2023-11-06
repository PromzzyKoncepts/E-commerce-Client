import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "./CheckoutSteps";

const OrderSummary = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //const cartItems = useSelector((state) => state.cart);
    const shippingAddress = useSelector((state) => state.shippingAddress);
    const method = useSelector((state) => state.payment);

    const cartIt = [
        {
            name: "Xiaomi Laptop",
            quantity: 6,
            price: 25.76,
            image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/4981652/1.jpg?7865",
        },
        {
            name: "Xiaomi Phone",
            quantity: 4,
            price: 220,
            image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/4981652/1.jpg?7865",
        },
    ];

    // Calculate item prices, shipping price, and total price
    const itemTotalPrice = cartIt.reduce((total, item) => total + item.quantity * item.price, 0);
    const itemTotal = cartIt.reduce((total, itemTotal) => total + itemTotal.quantity, 0);
    const shippingPrice = cartIt.length !== 0 ? 500 : 0;
    const totalPrice = itemTotalPrice + shippingPrice;

    const placeOrderHandler = () => {
        // Implement order placement logic here
        // You can use the data from cartItems, shippingAddress, and paymentMethod
    };

    return (

        <div className="md:flex lg:flex lg:space-x-6 md:space-x-5 p-7 m-10 bg-slate-50  rounded-lg" >
            {/* Main Content on the Left */}
            <div className="md:w-2/3 lg:w-2/3">
                {/* Display ordered items in a table */}
                <div className="bg-white shadow-md rounded-lg">
                    <h2 className="text-xl text-amber-500 font-semibold mb-4 pl-5 pt-4">Order Items</h2>
                    {cartIt.length === 0 || undefined
                        ? (
                            <div className="flex justify-center items-center " >
                                <h3 className="pt-10">Your Cart is Empty</h3>
                            </div>
                        ) : (
                            <table className="w-full border-collapse table-auto pl-5">
                                <thead className="bg-amber-50  pl-4">
                                    <tr>
                                        <th className="py-2 pl-5 text-sm">Item</th>
                                        <th className="py-2 text-sm">Quantity</th>
                                        <th className="py-2 text-sm">Item Price</th>
                                        <th className="py-2 text-sm">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartIt.map((item, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="py-2">
                                                <div className="flex items-center space-x-4 pl-5">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="lg:w-6 lg:h-6 w-4 h-4 object-cover rounded-lg"
                                                    />
                                                    <Link to={`/product/₦{item._id}`} className="text-amber-500">
                                                        <h5 className="text-base font-semibold">{item.name}</h5>
                                                    </Link>
                                                </div>
                                            </td>
                                            <td className="py-2">
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        className="text-amber-400 "
                                                        onClick={() => adjustQuantity(index, item.quantity - 1)}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-6 lg:h-6 w-4 h-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>

                                                    </button>
                                                    <div>
                                                        {item.quantity}
                                                    </div>
                                                    <button
                                                        className="text-amber-500"
                                                        onClick={() => adjustQuantity(index, item.quantity + 1)}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-6 lg:h-6 w-4 h-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>

                                                    </button>
                                                </div>
                                            </td>
                                            <td className="py-2 text-lg font-bold text-black">
                                                ₦{item.price.toFixed(2)}

                                                <p className="text-xs font-normal text-slate-400">
                                                    ₦{item.price.toFixed(2)} x {item.quantity} items ={" "}
                                                    ₦{(item.quantity * item.price).toFixed(2)}
                                                </p>
                                            </td>
                                            <td className="py-2">
                                                <button onClick={() => removeItem(index)} className="text-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-5 lg:h-5 w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>

                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                </div>
                <div className="">
                    <button
                        className="cont-shop sm:hidden md:flex lg:flex justify-center mt-3 items-center text-amber-500 from-neutral-600 tracking-wider rounded"
                        type="button"
                        onClick={() => navigate('/checkout/payments')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <div className="pl-3">Continue Shopping</div>

                    </button>
                </div>
            </div>


            <div className="lg:w-1/3 md:w-1/3 mt-6 md:mt-0 lg:mt-0">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-4 text-amber-500">Order Summary</h2>
                    {/* Display shipping address */}
                    <p className="border-b mb-2 pb-2 font-semibold">
                        Shipping Address :
                        <span className="text-xs font-normal">
                            {""} {""} {shippingAddress.address}, {shippingAddress.city},{" "}
                            {shippingAddress.zip}, {shippingAddress.state}.
                        </span>

                    </p>
                    {/* Display payment method */}
                    <p className="border-b mb-2 pb-2 font-semibold">
                        Payment Method :
                        <span className="text-xs font-normal">
                            {""} {""} {method.paymentMethod}
                        </span>
                    </p>
                    {/* Display item prices, shipping price, and total price */}
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs">Item's Total (<span className="font-semibold">{itemTotal}</span>)</span>
                        <span className="text-sm font-semibold">₦{itemTotalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2 border-b pb-2">
                        <span className="text-xs">Delivery Fee</span>
                        <span className="text-sm font-semibold">₦{shippingPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2 border-b pb-1">
                        <span className="text-sm font-semibold">Total</span>
                        <span className="text-xl font-bold">₦{totalPrice.toFixed(2)}</span>
                    </div>


                    <div className="pt-1 flex justify-between text-xs">
                        <button
                            className="px-4 py-1 text-amber-500 from-neutral-600 tracking-wider rounded hover:bg-amber-500 hover:text-white"
                            type="button"
                            onClick={() => navigate('/checkout/payments')}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="lg:w-6 lg:h-6 w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={placeOrderHandler}
                            className="px-4 py-1 text-white bg-amber-500 text-sm from-neutral-900 tracking-wider rounded hover:bg-amber-400 hover:text-white"
                            disabled={cartIt.length === 0}
                        >
                            PLACE ORDER
                        </button>
                    </div>

                </div>

            </div>
        </div >

    );
};

export default OrderSummary;
