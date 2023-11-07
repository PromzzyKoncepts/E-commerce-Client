import { useState } from "react";
import logo from "../assets/aphia.png";

const Footer = () => {
  return (
    <footer className=" bg-gray-800 mt-5 flex items-center justify-between flex-col w-full m-auto py-5 text-slate-200 p-[15px] mb-[20px]">
      {/* <div className="flex items-center justify-between flex-col w-full m-auto py-5 text-slate-200"> */}
      <div className="flex w-[100%] justify-between ">
        <div className="w-[50%]" row1>
            <h3>About Aphia</h3>
            <a
              className="no-underline text-gray-400 hover:text-amber-500"
              href="#"
            >
              About Us
            </a>
            <br></br>
            <a
              className="no-underline text-gray-400 hover:text-amber-500"
              href="#"
            >
              Return Policy
            </a>
            <br></br>
            <a
              className="no-underline text-gray-400 hover:text-amber-500"
              href="#"
            >
              Terms & Agreement
            </a>
          </div>
        {/* <div>
          <h5>Follow us on:</h5>
        </div> */}
        <div className="w-[50%]">
            <h3>Explore</h3>
            <a
              className="no-underline text-gray-400 hover:text-amber-500"
              href="#"
            >
              Sell On Aphia
            </a>
            <br></br>
            <a
              className="no-underline text-gray-400 hover:text-amber-500"
              href="#"
            >
              Ads and Contents
            </a>
            <br></br>
            <a
              className="no-underline text-gray-400 hover:text-amber-500"
              href="#"
            >
              Official Stores
            </a>
            <br></br>
          </div>
        <div className="flex gap-5">
          
          
         
        </div>
      </div>
      <div className="flex w-[100%] flex-between mt-[20px]" row2>
          <ul className="w-[50%]">
            <li>Quick Links</li>
            <a
              className="no-underline text-gray-400 hover:text-amber-500"
              href="#"
            >
              Chat With Us
            </a>
            <br></br>
            <a
              className="no-underline text-gray-400 hover:text-amber-500"
              href="#"
            >
              Complaints & Reports
            </a>
            <br></br>
            <a
              className="no-underline text-gray-400 hover:text-amber-500"
              href="#"
            >
              Delivery Stations
            </a>
            <br></br>
          </ul>

      <div className="w-[50%]">
        <img src={logo} className="w-[80px]" />
        <p>aphia.store</p>
      </div>
      </div>

      {/* </div> */}
      {/* <div className="" id="contact">


<div className="">

</div>

</div> */}
      <div className="flex justify-center flex-col items-center w-full mt-[20px]">
      <p className="w-[50%]">All Rights Reserved &copy; Aphia Stores Inc</p>
          <p className="text-amber-500 w-[50%]">
            Designed and Built by
            <a
              className="text-amber-500 no-underline"
              href="https://promise-okechukwu.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Lm-Techies
            </a>
          </p>
      </div>
    </footer>
  );
};

export default Footer;
