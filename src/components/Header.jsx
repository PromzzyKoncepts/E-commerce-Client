import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import aphia from "../assets/aphia.png";
import { useSelector } from "react-redux";
import userContext from "../context/userContext";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Burger, Menu, Overlay } from "./hamburger";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));


const Header = () => {
  const [open, setOpen] = useState(false);
  const { authUser } = useContext(userContext);
  const [isCategories, setIsCategories] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleCategories = () => setIsCategories((prev) => !prev);
  const allCartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-slate-50 ${
        isScrolled ? "fixed w-full top-0  z-[10000000]" : "relative "
      } py-[0.6rem]`}
    >
      <header className=" text-gray-800 flex  justify-between md:justify-evenly  items-center  m-auto">
        <Link to="/">
          <img
            src={aphia}
            alt="aphia logo"
            className=" max-w-[9rem] pl-7 md:pl-0 object-contain"
          ></img>
        </Link>

        <div className="wrap desktop">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="Search for products, categories, brands"
            />

            <button type="submit" className="searchButton">
              <SearchIcon />
            </button>
          </div>
        </div>

        <nav className="flex flex-row justify-between gap-4 items-center desktop">
          <div>
            <div
              className="items-center relative font-semibold cursor-pointer"
              onMouseEnter={handleCategories}
              onMouseLeave={handleCategories}
            >
              {authUser ? ` ${authUser.username}` : "My account"}
              <ArrowDropDownIcon />
              {isCategories && (
                <section className=" z-[10000] absolute bg-[#333237aa] px-3 py-3 items-center rounded">
                  <div>
                    {authUser ? (
                      <div className="flex flex-col items-center">
                        <NavLink
                          className="rounded no-underline text-white"
                          to="/orders"
                        >
                          Orders
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
                            className="bg-amber-500 hover:bg-[#FF8D3A] p-2 no-underline rounded text-white"
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
            className=" flex items-center gap-2 no-underline text-slate-900"
          >
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={allCartItems?.length} color="error">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            Cart
          </NavLink>
          <NavLink
            className="bg-amber-500 px-3 py-1 rounded font-bold hover:bg-orange-500 no-underline text-white"
            to="/dashboard"
          >
            Sell
          </NavLink>
        </nav>
        <div className="hamburger">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          <Overlay open={open} onClick={() => setOpen(false)} />
        </div>
      </header>
    </div>
  );
};

export default Header;
