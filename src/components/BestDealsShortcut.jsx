import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import axios from "axios";

function BestDealsShortcut() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const url = "https://aphia-dev.onrender.com/api/flash";
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const res = await axios.get(url);
      setIsLoading(false);
      const targetRes = res.data.message;
      const products = targetRes.slice(0, 4);
      setData(products);
    };
    fetchData();
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <div className="p-8 w-10/12 mx-auto flex items-center justify-center h-[70vh]">
          <p className=" animate-spin h-5 w-5 border-2 border-zinc-800 border-x-transparent rounded-full p-4 "></p>
        </div>
      ) : (
        <div className="w-10/12 mx-auto mt-4 bg-slate-200 pt-6 p-4 rounded-t-lg relative">
          <div className="">
            <h2 className="pb-4 text-3xl mx-auto w-fit mb-4">Best Deals</h2>
            <Link
              to="/best-deals"
              className="bg-red-600 text-white  p-1 rounded-tr-lg absolute top-0 right-0 no-underline hover:underline"
            >
              Show All
            </Link>
            <div className="flex overflow  md:grid md:grid-cols-4  gap-3">
              {data.map((item) => (
                <div
                  key={item.product._id}
                  className="bg-white text-black pb-2 px-6 pt-6 rounded relative no-underline hover:drop-shadow-lg hover:scale-[1.02] duration-1000"
                >
                  <div className="bg-white md:w-full md:min-w-full min-w-[30vw]">
                    <small className="text-slate-100 bg-red-500 p-1 absolute top-0 left-0 rounded-tl-sm">
                      flash
                    </small>
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-48 object-contain"
                    />
                  </div>
                  <div className="">
                    <div className="flex justify-between items-center gap-2 ">
                      <p className="font-semibold mt-6">{item.product.name}</p>
                      <FavoriteBorderIcon />
                    </div>
                    <div className="flex justify-between">
                      <p className="font-semibold text-sm">
                        &#8358;{item.product.price}
                      </p>
                      <p className="text-sm text-amber-600 p-1 rounded hover:bg-amber-100 active:bg-amber-200">
                        <ShoppingBagIcon />
                        shop now
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BestDealsShortcut;
