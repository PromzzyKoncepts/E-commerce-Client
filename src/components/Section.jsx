import React from "react";
import { Link, NavLink } from "react-router-dom";
import advert1 from "../assets/advert1.jpg";
import advert2 from "../assets/shoes.jpg";
import advert3 from "../assets/clothes2.jpg";
import Advert from "../reusables/Advert";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import EarbudsIcon from "@mui/icons-material/Earbuds";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import IceSkatingIcon from "@mui/icons-material/IceSkating";

const Section = () => {
  return (
    <div className=" w-10/12 mx-auto mt-4 gap-4 desktop ">
      {/* <div
        data-aos="fade-right"
        className="rounded desktop item1 md:col-span-2 bg-slate-200"
      >
        <h3 className=" bg-slate-300 p-3 rounded ">Categories</h3>
        <div className="navlink flex flex-col gap-2 items-left justify-center">
          <div className="hover:border-r-2 hover:border-amber-500 hover:bg-slate-300">
            <NavLink
              className="p-3 no-underline text-[#3a3a3a] text-lg gap-2 flex items-center "
              to="/shoes"
            >
              <IceSkatingIcon /> Shoes
            </NavLink>
          </div>
          <div className="hover:border-r-2 hover:border-amber-500 hover:bg-slate-300">
            <NavLink
              className="p-3 no-underline text-[#3a3a3a] text-lg gap-2 flex items-center "
              to="/fashion/male"
            >
              <MaleIcon /> Male wears
            </NavLink>
          </div>
          <div className="hover:border-r-2 hover:border-amber-500 hover:bg-slate-300">
            <NavLink
              className="p-3 no-underline text-[#3a3a3a] text-lg gap-2 flex items-center "
              to="/fashion/female"
            >
              <FemaleIcon /> Female wears
            </NavLink>
          </div>
          <div className="hover:border-r-2 hover:border-amber-500 hover:bg-slate-300">
            <NavLink
              className="p-3 no-underline text-[#3a3a3a] text-lg gap-2 flex items-center "
              to="/accessories"
            >
              <EarbudsIcon /> Accessories
            </NavLink>
          </div>
          <div className="hover:border-r-2 hover:border-amber-500 hover:bg-slate-300">
            <NavLink
              className="p-3 no-underline text-[#3a3a3a] text-lg gap-2 flex items-center "
              to="/electronics"
            >
              <MicrowaveIcon /> Electronics
            </NavLink>
          </div>
          <div className="hover:border-r-2 hover:border-amber-500 hover:bg-slate-300">
            <NavLink
              className="p-3 no-underline phones text-[#3a3a3a] text-lg gap-2 flex items-center "
              to="/devices"
            >
              <PhoneIphoneIcon />
              Phone & Tablets
            </NavLink>
          </div>
          <div className="hover:border-r-2 hover:border-amber-500 hover:bg-slate-300">
            <NavLink
              className="p-3 no-underline text-[#3a3a3a] text-lg gap-2 flex items-center "
              to="/others"
            >
              <DevicesOtherIcon /> Other Categories
            </NavLink>
          </div>
        </div>
      </div> */}

      <div data-aos="fade-down" className="item2 md:col-span-4 grid gap-3 ">
        {/* first card */}
        {/* <Advert className="h-20 rounded " pics={advert1} /> */}

        {/* second and third card */}
        <div data-aos="fade-up" className="grid grid-cols-3 gap-4">
          <Advert className="item1 col-span-1" pics={advert2} />
          <Advert className="item2 col-span-1" pics={advert3} />
          <Advert className="item3 col-span-1" pics={advert3} />
        </div>
      </div>
    </div>
  );
};

export default Section;
