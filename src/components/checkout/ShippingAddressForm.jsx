import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateField, toggleUseAddressForPayment } from '../../redux/features/shippingAddressSlice';
import { useNavigate } from 'react-router-dom';

function ShippingAddressForm() {
    const shippingAddress = useSelector((state) => state.shippingAddress);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };
    
    const handleToggleUseAddress = () => {
    dispatch(toggleUseAddressForPayment());
  };

    return (
        <div className="flex items-center justify-center ">
            <form className="max-w-xl w-full p-5 bg-white rounded shadow-xl">
                <p className=" text-xl text-amber-500 font-medium">Shipping Address </p>

                <div className="mt-2">
                    <label htmlFor="user-address" className="block text-sm text-gray-600"/>
                    <input
                        className="w-full px-2 py-2 text-gray-700 border rounded"
                        id="user-address"
                        name="address"
                        type="text"
                        required
                        placeholder="Street"
                        aria-label="Address"
                        value={shippingAddress.address}
                        onChange={(e) => handleChange('address', e.target.value)}
                        
                    />
                </div>

                <div className="mt-2">
                    <label htmlFor="user-city" className="block text-sm text-gray-600"/>
                    <input
                        className="w-full px-2 py-2 text-gray-700 border rounded"
                        id="user-city"
                        name="city"
                        type="text"
                        required
                        placeholder="City"
                        aria-label="City"
                        value={shippingAddress.city}
                        onChange={(e) => handleChange('city', e.target.value)}
                    />
                </div>

                <div className="inline-block mt-2 w-1/2 pr-1">
                    <label htmlFor="user-state" className="block text-sm text-gray-600"/>
                    <input
                        className="w-full px-2 py-2 text-gray-700 border rounded"
                        id="user-state"
                        name="state"
                        type="text"
                        required
                        placeholder="State"
                        aria-label="State"
                        value={shippingAddress.state}
                        onChange={(e) => handleChange('state', e.target.value)}
                    />
                </div>

                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <label htmlFor="user-zip" className="block text-sm text-gray-600"/>
                    <input
                        className="w-full px-2 py-2 text-gray-700 border rounded"
                        id="user-zip"
                        name="zip"
                        type="text"
                        required
                        placeholder="Postal code"
                        aria-label="Zip"
                        value={shippingAddress.zip} 
                        onChange={(e) => handleChange('zip', e.target.value)}
                        
                    />
                </div>

                <p className="mt-2  text-xl text-amber-500 font-medium">Contact information</p>
                <div className="inline-block mt-2 w-1/2 pr-1">

                    <label htmlFor="user-phone" className="block text-sm text-gray-600" />
                    <input
                        className="w-full px-2 py-2 text-gray-700 border rounded"
                        id="user-phone"
                        name="phoneNum"
                        type="text"
                        required
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                        value={shippingAddress.phoneNum}
                        onChange={(e) => handleChange('phoneNum', e.target.value)}
                    />
                </div>
                
                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <label htmlFor="user-alt-phone" className="block text-sm text-gray-600"/>
                    <input
                        className="w-full px-2 py-2 text-gray-700 border rounded"
                        id="user-alt-phone"
                        name="altPhoneNum"
                        type="text"
                        placeholder="Alternative Phone"
                        aria-label="Alternative Phone"
                        value={shippingAddress.altPhoneNum}
                        onChange={(e) => handleChange('altPhoneNum', e.target.value)}                      
                    />
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
                        className="px-4 py-1 text-amber-500 from-neutral-600 tracking-wider rounded hover:bg-amber-500 hover:text-white"
                        type="button" 
                        onClick={() => navigate('/cart')} 
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                    </button>
                    
                    <button
                        className="px-4 py-1 text-amber-500 from-neutral-600 tracking-wider rounded hover:bg-amber-500 hover:text-white"
                        type="button"
                        style={{ marginLeft: 'auto' }}
                        onClick={() => navigate('/checkout/payments')}
                    >
                        NEXT
                    </button>
 c               </div>
            </form>
        </div>
    );
}

export default ShippingAddressForm;
