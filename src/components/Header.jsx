import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate, Navigate } from "react-router-dom";
import aphia from "../assets/aphia.png";
import userContext from "../context/userContext";
import Badge from "@mui/material/Badge";
import { ArrowDropDown, ShoppingCart } from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import styled from "@emotion/styled";
import { Burger, Menu, Overlay } from "./Hamburger";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);
  const allCartItems = useSelector((state) => state.cart.items);
  const [isCategories, setIsCategories] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  const { authUser } = useContext(userContext);
  const navigate = useNavigate()

  const handleCategories = () => setIsCategories((prev) => !prev);

  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [query, setQuery] = useState("");

  const handleSellButtonClick = () => {

    if (!authUser || !authUser.isVendor) {
      navigate("/auth");
    }
  };

  const handleClearSearch = () => {
    setShowSearchResults(false);
    setQuery("");
  };

  function handleNavigate(result) {
    navigate(`/products/${result._id}`)
    // Navigate(`/products/${result._id}`);
      handleClearSearch()
  }

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await fetch(
          "https://aphia-dev.onrender.com/api/products/search",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: query,
              page: currentPage,
              limit: 5,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Search failed");
        }

        const data = await response.json();
        console.log(data.message.results);
        setSearchResults(data.message.results);
        setTotalPages(Math.ceil(data.message.pagination.totalPages));
        setTotalResults(data.message.pagination.totalCount);
        setShowSearchResults(true);
      } catch (error) {
        console.error("Error searching:", error);
      }
    };

    handleSearch();
  }, [query, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="bg-slate-50 fixed w-full top-0  z-[10000000] py-[0.6rem]">
      <header className=" text-gray-800 flex  justify-between md:justify-evenly  items-center  m-auto">
        <Link to="/">
          <img
            src={aphia}
            alt="aphia logo"
            className=" max-w-[9rem] pl-7 md:pl-0 object-contain"
          ></img>
        </Link>

        <div className="wrap">
          <SearchBar
            onSearch={(value) => setQuery(value)}
            onClearSearch={handleClearSearch}
          />
          {showSearchResults && (
            <div>
              <div
                className="fixed inset-0 bg-amber-900 opacity-40 cursor-pointer"
                onClick={handleClearSearch}
              ></div>
              <div
                data-aos="fade-right"
                className="absolute top-full z-[5000]  md:left-[20%] left-[8%]  md:w-[60vw] w-[80vw]  rounded bg-white shadow-lg p-11 mt-2"
              >
                <ul>
                  <div className="flex pb-3 justify-between items-center">
                    <div>
                      <h2>
                        Search Results for{" "}
                        <span className="text-slate-600 italic">{query}</span>
                      </h2>
                      <small className="italic">
                        {totalResults} products found
                      </small>
                    </div>
                    <button
                      onClick={handleClearSearch} // Updated this line
                      className="px-3 py-2 rounded bg-amber-500 hover:bg-orange-500 text-white"
                    >
                      X
                    </button>
                  </div>
                  {searchResults?.map((result) => (
                    <div
                      onClick={() => handleNavigate(result)}
                      className="flex text-slate-700 cursor-pointer bg-slate-50 mb-3 p-2 justify-between items-center"
                      key={result._id}
                    >
                      {/* <NavLink to={`/products/${result._id}`}> */}
                        <div className="flex gap-2 items-center">
                          <img
                            className="w-11 object-cover "
                            src={result.images?.[0]}
                            alt={result.name}
                          ></img>
                          <h6>{result.name}</h6>
                        </div>
                        <div className="flex  gap-4 items-center">
                          <p className="font-bold">
                            &#8358;
                            {Intl.NumberFormat("en-US", {
                              maximumFractionDigits: 0,
                            }).format(result.price)}
                          </p>
                          <small className="hidden md:block">
                            {result.quantity} products in stock
                          </small>
                        </div>
                      {/* </NavLink> */}
                    </div>
                  ))}
                </ul>
                {totalPages > 1 && (
                  <div className="flex justify-center items-center  mt-4">
                    <button
                      className="px-3 py-2 rounded bg-amber-500 hover:bg-orange-500 active:bg-orange-600 disabled:bg-slate-300 text-white"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                    >
                      <ArrowBackIosIcon />
                    </button>
                    <span className="p-2 rounded bg-slate-50">
                      {currentPage} of {totalPages}
                    </span>
                    <button
                      className="px-3 py-2 rounded hover:bg-orange-500 active:bg-orange-600 bg-amber-500 disabled:bg-slate-300 text-white"
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      <ArrowForwardIosIcon />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <nav className="flex flex-row justify-between gap-4 items-center  ">
          <div>
            <div
              className=" desktop items-center relative font-semibold cursor-pointer"
              onMouseEnter={handleCategories}
              onMouseLeave={handleCategories}
            >
              {authUser ? ` ${authUser.username}` : "My account "}
              <ArrowDropDown />
              {isCategories && (
                <section className=" z-[10000] absolute bg-[#333237aa]  px-3 py-3 items-center rounded">
                  <div>
                    {authUser ? (
                      <div className="flex flex-col items-right">
                        <NavLink
                          className="rounded no-underline text-white"
                          to="/orders"
                        >
                          Orders
                        </NavLink>
                        <br />
                        <NavLink
                          className="rounded no-underline text-white"
                          to="/favorite"
                        >
                          favourite
                        </NavLink>
                        <br />

                        <NavLink
                          className="bg-amber-500 no-underline p-2 hover:bg-[#FF8D3A] rounded text-white"
                          to="/logout"
                        >
                          Log Out
                        </NavLink>
                      </div>
                    ) : (
                      <>
                        <div className="mb-3">
                          <NavLink
                            className="bg-amber-500 hover-bg-[#FF8D3A] p-2 no-underline rounded text-white"
                            to="/login"
                          >
                            Login
                          </NavLink>
                        </div>
                        <div>
                          <NavLink
                            className="text-white no-underline"
                            to="/register"
                          >
                            SignUp
                          </NavLink>
                        </div>
                      </>
                    )}
                  </div>
                </section>
              )}
            </div>
          </div>
          <NavLink
            to="/cart"
            className=" desktop flex items-center gap-2 no-underline text-slate-900 "
          >
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={allCartItems?.length} color="error">
                <ShoppingCart />
              </StyledBadge>
            </IconButton>
            <span className="">Cart</span>
          </NavLink>

          <NavLink
            className="bg-amber-500 px-3 py-1 rounded font-bold hover-bg-orange-500 no-underline text-white desktop"
            to="/auth"
            onClick={handleSellButtonClick}

          >
            Sell
          </NavLink>
        </nav>

        <NavLink
          to="/auth"
          className="  items-center gap-2 no-underline text-slate-900  md:hidden"
        >
          <IconButton aria-label="cart ">
            <StyledBadge badgeContent={allCartItems.length} color="error">
              <ShoppingCart />
            </StyledBadge>
          </IconButton>
        </NavLink>
        <div className="hamburger md:py-3 pr-4 md:my-3 ">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          <Overlay open={open} onClick={() => setOpen(false)} />
        </div>
      </header>
    </div>
  );
};

export default Header;
