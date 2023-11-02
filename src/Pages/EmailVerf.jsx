import React from 'react';

const VerifyPage = () => {
  return (
    <div className="text-center fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className=" p-[5rem] bg-white rounded-lg shadow-lg">
        <h1 className="text-amber-500 text-4xl font-bold mb-5">Please Verify Your Account</h1>
        <h3 className='font-bold text-lg'>A verification link has been sent to your email address</h3>
        <p className="  mt-2 ">
          Kindly check your mail inbox or spam to verify your account before proceeding.
        </p>
        <p className='font-bold'>Didn't get a mail...? </p>
        <button className="mt-6 bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Resend 
        </button>
      </div>
    </div>
  );
};

export default VerifyPage;
