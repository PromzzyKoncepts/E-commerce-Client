import React from 'react';
import { Link  } from 'react-router-dom';




const emailConf = ({ onLoginClick }) => {
  return (
    <div className="fixed text-center flex-col inset-0 flex items-center justify-center ">
      <div className="bg-white-300 p-[5rem] rounded-lg bg-slate-50 shadow-lg w-[100%] ">
        <h1 className="w-[100%] text-[20px] text-green-500 font-bold md:text[50px] font-small">Congratulations!</h1>
        <p className="text-black text-lg mt-4">
          Your account has been verified.
        </p>
    
        <Link to="/login"
          onClick={onLoginClick}
          className="my-4 bg-amber-500 hover:bg-amber-700 text-white block mx-auto font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        
          Login
        </Link>
        <small className=''  >kindly click on the button to login</small>
      </div>
    </div>
  );
};

export default emailConf;
