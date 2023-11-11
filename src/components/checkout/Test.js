import React from 'react'
import SuccessGif from '../../assets/success-gif.gif'

const Test = () => {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
        <img className="block mx-auto w-32" src={SuccessGif} alt="error-timeout" />
        <h2 className="text-base font-bold text-cyan-400 mb-4 pt-3">
          Your order has been created successfully.
        </h2>
      </div>
      {/* Display payment details after a success message for 3 seconds */}
      {/* {setTimeout(() => {
        navigate('/checkout/makepayment');
      }, 3000)} */}
    </div>
    )
}

export default Test