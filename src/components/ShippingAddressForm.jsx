import React from 'react';

function ShippingAddressForm() {
    
    return (
        <div className="flex items-center justify-center ">
            <form className="max-w-3xl m-4 p-10 bg-white rounded shadow-xl">
                <p className="text-gray-800 font-medium">Shipping Details</p>

                <div className="mt-2">
                    <label htmlFor="user-address" className="block text-sm text-gray-600"/>
                    <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        id="user-address"
                        name="address"
                        type="text"
                        required
                        placeholder="Street"
                        aria-label="Address"
                        
                    />
                </div>

                <div className="mt-2">
                    <label htmlFor="user-city" className="block text-sm text-gray-600"/>
                    <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        id="user-city"
                        name="city"
                        type="text"
                        required
                        placeholder="City"
                        aria-label="City"
                    />
                </div>

                <div className="inline-block mt-2 w-1/2 pr-1">
                    <label htmlFor="user-state" className="block text-sm text-gray-600"/>
                    <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        id="user-state"
                        name="state"
                        type="text"
                        required
                        placeholder="State"
                        aria-label="State"
                    />
                </div>

                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <label htmlFor="user-zip" className="block text-sm text-gray-600"/>
                    <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        id="user-zip"
                        name="zip"
                        type="text"
                        required
                        placeholder="Postal code"
                        aria-label="Zip"
                    />
                </div>

                <p className="mt-4 text-gray-800 font-medium">Contact information</p>
                <div className="inline-block mt-2 w-1/2 pr-1">

                    <label htmlFor="user-phone" className="block text-sm text-gray-600" />
                    <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        id="user-phone"
                        name="phoneNum"
                        type="text"
                        required
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                    />
                </div>
                
                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <label htmlFor="user-alt-phone" className="block text-sm text-gray-600"/>
                    <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        id="user-alt-phone"
                        name="altPhoneNum"
                        type="text"
                        placeholder="Alternative Phone Number"
                        aria-label="Alternative Phone Number"                        
                    />
                </div>
                <div className="mt-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-amber-300 transition duration-150 ease-in-out"
                            name="saveAddress"
                            value="yes"
                        />
                        <span className="ml-2 text-sm text-gray-600">
                            Use this address for payment details
                        </span>
                    </label>
                </div>
                <div className="mt-4 flex justify-center">
                    <button
                        className="px-4 py-1 pb-2 text-slate-950 from-neutral-600 tracking-wider bg-amber-500 rounded"
                        type="submit"
                    >
                        NEXT
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ShippingAddressForm;
