import { useState } from "react";
import logo from "../assets/aphialight.png";
import { NavLink, Link } from "react-router-dom";

const Footer = () => { 
  

  return (
    <div className=" bg-gray-800 mt-5">
      <div className="flex flex-wrap flex-grow items-center justify-between w-10/12 m-auto py-5 text-slate-200">
        <div className="" id="contact">
          <div className="">
            <div>
              <img src={logo} className="w-36" />
              <p>aphia.store</p>
            </div>

            <div>
              <h5>Follow us on:</h5>
            </div>
          </div>
          <div className="">
            <p>All Rights Reserved &copy; Aphia Stores Inc</p>
            {/* <p className="text-amber-500">
              Designed and Built by
              <a
                className="text-amber-500 no-underline"
                href="https://promise-okechukwu.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Lm-Tech Students (Cohort 2)
              </a>
            </p>             */}
          </div>
        </div>

        <div className="flex flex-wrap gap-5">
          <div className="">
            <h3>About Aphia</h3>
            
            <NavLink to='/condition' className="no-underline text-gray-400 hover:text-amber-500">
              Terms & Conditions
            </NavLink>
            <br></br>
          
            
          </div>
          <div>
            <h3>Explore</h3>
            <Link
              className="no-underline text-gray-400 hover:text-amber-500"
              to="/sell"
            >
              Sell On Aphia
            </Link>
            <br></br>
           
            
          </div>
          <div>
            <h3>Quick Links</h3>
            
            <NavLink
            className="no-underline text-gray-400 hover:text-amber-500" to="/faqs"
            >FAQs</NavLink>
            <br></br>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;