import React from 'react'
import { useSelector } from 'react-redux';

const OrderPayDetails = () => {

const order = useSelector((state) => state.order.order);

    return (
      <div className="order-confirmation bg-gray-100 p-4 rounded-md shadow-md mx-auto mt-8 max-w-md">
        <div className="success-message bg-green-500 text-white p-4 rounded-md mb-4">
          <h2 className="text-xl font-semibold">Make your Payment!</h2>
          <p>{order.message}</p>
        </div>
        <div className="order-details">
          {/* <h3 className="text-lg font-semibold mb-2">Order Details</h3>
          <p><span className="font-semibold">Order ID:</span> {order.orderId}</p>
          <p><span className="font-semibold">Payment Status:</span> {order.paymentInitiation.status}</p> */}
          <div className="payment-meta bg-gray-200 p-4 rounded-md mt-4">
            <h4 className="text-lg font-semibold mb-2">Payment Information</h4>
            <p><span className="font-semibold">Transfer Reference:</span> {order.paymentInitiation.meta.authorization.transfer_reference}</p>
            <p><span className="font-semibold">Transfer Account:</span> {order.paymentInitiation.meta.authorization.transfer_account}</p>
            <p><span className="font-semibold">Transfer Bank:</span> {order.paymentInitiation.meta.authorization.transfer_bank}</p>
            <p><span className="font-semibold">Account Expiration:</span> {order.paymentInitiation.meta.authorization.account_expiration}</p>
            <p><span className="font-semibold">Transfer Note:</span> {order.paymentInitiation.meta.authorization.transfer_note}</p>
            <p><span className="font-semibold">Transfer Amount:</span> {order.paymentInitiation.meta.authorization.transfer_amount}</p>
          </div>
        </div>
      </div>
    );
  };

export default OrderPayDetails