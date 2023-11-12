import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateField, toggleUseAddressForPayment } from '../../redux/features/shippingAddressSlice';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from './CheckoutSteps';

function ShippingAddressForm() {
    const shippingAddress = useSelector((state) => state.shippingAddress);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleChange = (field, value) => {
        dispatch(updateField({ field, value }));
        
        // Clear the error for the field when the user starts typing
        setErrors({ ...errors, [field]: '' });
    };

    const handleToggleUseAddress = () => {
        dispatch(toggleUseAddressForPayment());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check form validity
        const form = e.target;
        const newErrors = {};
        let formIsValid = true;

        for (let i = 0; i < form.elements.length; i++) {
            const field = form.elements[i];

            if (field.nodeName === 'INPUT' && !field.checkValidity()) {
                newErrors[field.name] = field.validationMessage;
                formIsValid = false;
            }
        }

        setErrors(newErrors);

        if (formIsValid) {
            // Proceed to the next page
            navigate('/checkout/payments');
        }
    };

    return (
      <div data-aos="fade-up" className="flex items-center justify-center pt-5">
        <form
          className="max-w-xl w-full p-5 bg-white rounded shadow-xl relative"
          onSubmit={handleSubmit}
        >
          <div className="absolute -top-2 left-20">
            <CheckoutSteps />
          </div>
          <p className="text-xl text-amber-500 font-medium">Shipping Address</p>

          <div className="mt-2">
            <label
              htmlFor="user-address"
              className="block text-sm text-gray-600"
            />
            <input
              className="w-full px-2 py-2 text-gray-700 border rounded"
              id="user-address"
              name="address"
              type="text"
              required
              placeholder="Street"
              aria-label="Address"
              value={shippingAddress.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>

          <div className="mt-2">
            <label
              htmlFor="user-city"
              className="block text-sm text-gray-600"
            />
            <input
              className="w-full px-2 py-2 text-gray-700 border rounded"
              id="user-city"
              name="city"
              type="text"
              required
              placeholder="City"
              aria-label="City"
              value={shippingAddress.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
          </div>

          <div className="inline-block mt-2 w-1/2 pr-1">
            <label
              htmlFor="user-state"
              className="block text-sm text-gray-600"
            />
            <input
              className="w-full px-2 py-2 text-gray-700 border rounded"
              id="user-state"
              name="state"
              type="text"
              required
              placeholder="State"
              aria-label="State"
              value={shippingAddress.state}
              onChange={(e) => handleChange("state", e.target.value)}
            />
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state}</p>
            )}
          </div>

          <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label htmlFor="user-zip" className="block text-sm text-gray-600" />
            <input
              className="w-full px-2 py-2 text-gray-700 border rounded"
              id="user-zip"
              name="zip"
              type="text"
              required
              placeholder="Postal code"
              aria-label="Zip"
              value={shippingAddress.zip}
              onChange={(e) => handleChange("zip", e.target.value)}
            />
            {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
          </div>

          <p className="mt-2  text-xl text-amber-500 font-medium">
            Contact information
          </p>

          <div className="inline-block mt-2 w-1/2 pr-1">
            <label
              htmlFor="user-phone"
              className="block text-sm text-gray-600"
            />
            <input
              className="w-full px-2 py-2 text-gray-700 border rounded"
              id="user-phone"
              name="phoneNum"
              type="text"
              required
              placeholder="Phone Number"
              aria-label="Phone Number"
              value={shippingAddress.phoneNum}
              onChange={(e) => handleChange("phoneNum", e.target.value)}
            />
            {errors.phoneNum && (
              <p className="text-red-500 text-sm">{errors.phoneNum}</p>
            )}
          </div>

          <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label
              htmlFor="user-alt-phone"
              className="block text-sm text-gray-600"
            />
            <input
              className="w-full px-2 py-2 text-gray-700 border rounded"
              id="user-alt-phone"
              name="altPhoneNum"
              type="text"
              placeholder="Alternative Phone"
              aria-label="Alternative Phone"
              value={shippingAddress.altPhoneNum}
              onChange={(e) => handleChange("altPhoneNum", e.target.value)}
            />
            {errors.altPhoneNum && (
              <p className="text-red-500 text-sm">{errors.altPhoneNum}</p>
            )}
          </div>

          <div className="mt-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-amber-300 transition duration-150 ease-in-out"
                name="saveAddress"
                checked={shippingAddress.useAddressForPayment}
                onChange={handleToggleUseAddress}
              />
              <span className="ml-2 text-sm text-gray-600">
                Use this address for payment details
              </span>
            </label>
          </div>

          <div className="pt-4 flex justify-between text-xs">
            <button
              className="p-2 text-amber-500 from-neutral-600 tracking-wider hover:bg-amber-500 hover:text-white"
              type="button"
              onClick={() => navigate("/cart")}
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
              className="p-2 text-amber-500 from-neutral-600 tracking-wider  hover:bg-amber-500 hover:text-white"
              type="submit"
              style={{ marginLeft: "auto" }}
            >
              NEXT
            </button>
          </div>
        </form>
      </div>
    );
}

export default ShippingAddressForm;
