import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import FavoriteProduct from "../components/FavoriteProduct";

const FavoritePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let totalPages = useRef();
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  totalPages.current = Math.ceil(favoriteProducts.length / itemsPerPage);
  const productsToDisplay = favoriteProducts.slice(startIndex, endIndex);
  const handlePrev = () => setCurrentPage((prev) => prev - 1);
  const handleNext = () => setCurrentPage((prev) => prev + 1);
  useEffect(() => {
    async function getFavorite() {
      const token = localStorage.getItem("authToken");
      const res = await axios.get(
        "https://aphia-dev.onrender.com/api/favorites",
        { headers: { Authorization: token } }
      );
      setFavoriteProducts(res?.data?.message);
      console.log(res.data.message);
    }
    getFavorite();
  }, []);

  return (
    <div className="">
      <div className="w-10/12 mx-auto mt-4 bg-slate-200 pt-6 p-4 rounded-t-lg relative">
        <div className="">
          <h2 className="pb-4 text-3xl mx-auto w-fit mb-4">Favorites</h2>
          {productsToDisplay.length === 0 ? (
            <p className="text-center text-3xl  text-gray-500">
              You have not liked any product. <br />
              <Link
                className="text-sm no-underline p-2 bg-amber-500  mt-3 text-white rounded mx-auto"
                to="/"
              >
                Go back
              </Link>
            </p>
          ) : (
            <div className="">
              <div className="grid grid-cols-5 gap-[0.6rem]">
                {productsToDisplay.map((item) => (
                  <FavoriteProduct
                    productObject={item.product}
                    key={item.product._id}
                  />
                ))}
              </div>
              <div className="mx-auto w-fit flex gap-5 shadow-md p-2 mt-2 rounded-sm bg-orange-400 hover:bg-slate-200">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className="disabled:opacity-40"
                >
                  {<ArrowBackIosIcon />}
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages.current}
                  className=" disabled:opacity-40"
                >
                  {<ArrowForwardIosIcon />}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
