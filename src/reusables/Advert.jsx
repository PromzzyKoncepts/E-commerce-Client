import React, { useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";

const Advert = ({pics}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={` relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-full md:h-[25rem] h-[23vh]  rounded bg-no-repeat bg-cover md:bg-cover bg-center ${
          isHovered ? "hoveredd" : ""
        }`}
        style={{ backgroundImage: `url(${pics})` }}
      ></div>
      {isHovered && (
        <div className="content">
          <div className="md:first-letter:animate-bounce absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Link
              to=""
              className="z-auto flex text-slate-100 no-underline bg-amber-500  px-2 py-3 items-center rounded hover:bg-[#ff8d3a]"
              // className="z-auto text-slate-100 no-underline bg-amber-500 p-2 rounded flex items-center m-auto w w-2/6 justify-center"
            >
              <span className="hidden md:block"><ShoppingBagIcon/></span>
               Shop now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advert;
