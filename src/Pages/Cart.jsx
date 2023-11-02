import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotal,
  calculateTotalAsync,
  deleteAll,
  remove,
  updateQuantity,
} from "../redux/features/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Cart = () => {
  const cartTotal = useSelector((state) => state.cart.total);
  const cartItems = useSelector((state) => state.cart.items);
  // const total = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalAsync());
  }, [cartItems, dispatch]);

  // Function to increment the quantity of an item
  const incrementQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      dispatch(updateQuantity({ id: itemId, quantity: item.quantity + 1 }));
    }
  };

  // Function to decrement the quantity of an item
  const decrementQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: item.quantity - 1 }));
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (item) => {
    dispatch(remove(item));
  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    let total = 0;

    // Calculate the total based on item prices and quantities
    for (const item of cartItems) {
      total += item.price * (item.quantity || 1); // Use a default quantity of 1 if quantity is undefined
    }

    //  return Math.round(total);
    //   instead of Math.round, i deceided to use Intl.NumberrFOrmat to add comma to the total
    return Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
      total
    );
  };

  return (
    <div className="">
      {cartItems.length === 0 ? (
        <h2 className=" flex flex-col justify-center items-center h-[60vh]">
          You have no products in your cart!{" "}
          <Link to="/" className="text-amber-500 no-underline">
            {" "}
            Kindly purchase some{" "}
          </Link>
        </h2>
      ) : (
        <div>
          <h1 className="text-2xl text-center m-3">
            Welcome to your Cart <small>({cartItems.length}) items</small>
          </h1>
          <div className="w-10/12 m-auto grid grid-cols-4 gap-5">
            <div className="item1 col-span-3 bg-slate-50 p-5 rounded">
              {cartItems.map((item) => {
                return (
                  <div
                    className="cart-content grid grid-cols-4 items-center border-b border-slate-300"
                    key={item.id}
                  >
                    <div className="item1 col-span-3 my-4">
                      <div className="flex gap-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-w-[20%] object-fill"
                        />
                        <div>
                          <p className="text-2xl">{item.title}</p>
                          <p className="desc">{item.category}</p>
                          <button
                            className="bg-amber-500 text p-2 rounded text-slate-100 hover:bg-red-700"
                            onClick={() => removeFromCart(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="item2 col-span-1">
                      <h4>&#8358;{item.price}</h4>
                      <div>
                        <button
                          className="bg-amber-500 text p-2 rounded text-slate-100 hover:bg-orange-500 active:bg-orange-600"
                          onClick={() => decrementQuantity(item.id)}
                        >
                          <RemoveIcon />
                        </button>
                        <span className="text p-2 rounded">
                          {item.quantity || 1}
                        </span>
                        <button
                          className="bg-amber-500 text p-2 rounded text-slate-100 hover:bg-orange-500 active:bg-orange-600"
                          onClick={() => incrementQuantity(item.id)}
                        >
                          <AddIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <button
                className="clearAll bg-amber-500 text px-4 py-3 rounded text-slate-100  active:bg-orange-600 mt-4 font-medium hover:bg-red-800 "
                onClick={() => dispatch(deleteAll())}
              >
                Clear All
              </button>
            </div>
            <div className="checkout item2 col-span-1">
              <h5>Cart Summary</h5>
              <div className="flex items-center justify-between">
                <p>Sum Total</p>
                <h3>&#8358;{Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
      cartTotal
    )}</h3>
              </div>
              <Link
                className="p-3 bg-[#ff8d3a] no-underline text-slate-50 absolute rounded hover:bg-green-700"
                to="/shipping"
              >
                Checkout (&#8358;{calculateTotal()})
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
