import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VerifyPage = () => {
  const [email, setEmail] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);

  
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem('email', newEmail);
  };

  const userEmail = localStorage.getItem("email")
  console.log(userEmail)

  const handleVerifyClick = () => {
    const baseUrl = 'https://aphia-dev.onrender.com/api/users/resend'; 

    axios
      .post(baseUrl, { userEmail })
      .then(response => {
        console.log(response)
        // setVerificationResult(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };


  return (
    <div className="text-center fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className=" p-[5rem] bg-white rounded-lg shadow-lg">
        <h1 className="text-amber-500 text-2xl font-bold mb-5">Please Verify Your Account</h1>
        <h3 className='font-bold text-lg'>A verification link has been sent to your email address</h3>
        <p className="  mt-2 ">
          Kindly check your mail inbox or spam to verify your account before proceeding.
        </p>
        <p className='font-bold'>Didn't get a mail...? </p>
        <button className="mt-6 bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleVerifyClick}>
          Resend 
        </button>
        {/* {verificationResult && (
          <p className="mt-4 text-green-900">
            Verification Result: {verificationResult}
          </p>
        )} */}
        </div>
    </div>
  );
};


export default VerifyPage;
