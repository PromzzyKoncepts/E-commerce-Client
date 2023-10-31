import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-900">
      <footer className=" md:grid text-white py-9 grid-cols-3 m-auto w-11/12">
        <div className="item1 col-span-1">
          <h1 className="md:text-5xl">Aphia</h1>
          <a href="www.aphia.store">aphia.store</a>
          <h4>Follow us on</h4>
          <p>All Rights Reserved &copy; Zoba 2023</p>
          <button className="bg-orange-500 p-3 rounded hover:bg-amber-500 active:bg-red-600 disabled:bg-green-700" >Tochi: Call IG</button>
        </div>

        <div className="item2 col-span-2 flex gap-5">
          <div className="">
            <h3 className="text-orange-500">About Aphia</h3>
            <a className="hover:text-amber-400 visited:text-red-700" href="#">
              About Us
            </a>
            <br></br>
            <a className="" href="#">
              Return Policy
            </a>
            <br></br>
            <a className="" href="#">
              Terms & Agreement
            </a>
          </div>
          <div>
            <h3 className="text-orange-500">Explore</h3>
            <a className="" href="#">
              Sell On Aphia
            </a>
            <br></br>
            <a className="" href="#">
              Ads and Contents
            </a>
            <br></br>
            <a className="" href="#">
              Official Stores
            </a>
            <br></br>
          </div>
          <div>
            <h3 className="text-orange-500">Quick Links</h3>
            <a className="" href="#">
              Chat With Us
            </a>
            <br></br>
            <a className="" href="#">
              Complaints & Reports
            </a>
            <br></br>
            <a className="" href="#">
              Delivery Stations
            </a>
            <br></br>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
