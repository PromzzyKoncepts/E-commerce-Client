import styled from "styled-components";
// import Proptypes from 'prop-types';
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import {
  ArrowBack,
  ArrowDropDown,
  Category,
  ChatBubble,
  ChatBubbleOutlineRounded,
  DeliveryDining,
  Earbuds,
  Female,
  Home,
  PeopleAlt,
  Person,
  Sell,
  Store,
} from "@mui/icons-material";
import Male from "@mui/icons-material/Male";
import Microwave from "@mui/icons-material/Microwave";
import PhoneIphone from "@mui/icons-material/PhoneIphone";
import DevicesOther from "@mui/icons-material/DevicesOther";
import People from "@mui/icons-material/People";
import userContext from "../context/userContext";
import { BiUser } from "react-icons/bi";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  background: #200000;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 4rem 2rem 0;
  position: fixed;
  overflow-y: auto;
  z-index: 3000;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 60%;
  }

  a {
    font-family: "Inter", sans-serif !important;
    font-size: 1rem;
    padding: 0.7rem 10px;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: left;
      border-bottom: none;
    }

    &:hover {
      color: #ff8d3a;
    }

    &.active {
      padding: 0.8rem 10px;
      background-color: #f97316;
      color: #200000;
      font-weight: 700;
      border-bottom: none;
      border-radius: 10px;
    }
    &.active svg {
      color: #200000 !important;
    }
  }

  .cat {
    font-family: "Inter", sans-serif !important;
    font-size: 1rem;
    padding: 0.8rem 10px;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: left;
      border-bottom: none;
    }

    &:hover {
      color: #ff8d3a;
    }
  }
`;

const Menu = ({ open, setOpen }) => {
  const { authUser } = useContext(userContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isCategories, setIsCategories] = useState(false);
  const handleCategories = () => setIsCategories((prev) => !prev);

  // Toggle the dropdown visibility when the dropdown icon is clicked
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdownAbout = () => {
    setDropDown(!dropDown);
  };
  return (
    <StyledMenu className="navmenu" open={open}>
      <div className=" cat cursor-pointer" onClick={handleCategories}>
        <Person />
        {authUser ? ` ${authUser.username}` : "My account"}
        <ArrowDropDown />
        {isCategories && (
          <section className="flex bg-[#7c542f1c] mt-2 rounded flex-col">
            {authUser ? (
              <>
                <NavLink
                  onClick={() => setOpen(false)}
                  className=""
                  to="/orders"
                >
                  My Orders
                </NavLink>
                <NavLink
                  onClick={() => setOpen(false)}
                  className=""
                  to="/favorite"
                >
                  My Favorites
                </NavLink>
                <NavLink
                  onClick={() => setOpen(false)}
                  className=""
                  to="/logout"
                >
                  Log Out
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  className=""
                  to="/login"
                  onClick={() => setOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={() => setOpen(false)}
                  className=""
                >
                  SignUp
                </NavLink>
              </>
            )}
          </section>
        )}
      </div>

      <NavLink to="/" onClick={() => setOpen(false)}>
        <Home /> Home
      </NavLink>
      <NavLink to="/cart" onClick={() => setOpen(false)}>
        <ShoppingCart /> My Cart
      </NavLink>
      <div className="relative cat" onClick={toggleDropdown}>
        <div className="cursor-pointer">
          <Category /> Categories <ArrowDropDown />
        </div>
        {isDropdownOpen && (
          <section className=" bg-[#7c542f1c] mt-2 rounded flex flex-col pt-4 w-full">
            <NavLink onClick={() => setOpen(false)} to="/fashion/male">
              <Male /> Male Wears
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/fashion/female">
              <Female /> Female Wears
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/accessories">
              <Earbuds /> Accessories
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/electronics">
              <Microwave /> Electronics
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/devices">
              <PhoneIphone />
              Phones & Tabs
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/others">
              <DevicesOther /> Others
            </NavLink>
          </section>
        )}
      </div>
      <NavLink to="/dashboard" onClick={() => setOpen(false)}>
        <Sell /> Sell on Aphia*
      </NavLink>
      <div className="relative cat " onClick={toggleDropdownAbout}>
        <div className="cursor-pointer">
          <PeopleAlt /> About Aphia <ArrowDropDown />
        </div>
        {dropDown && (
          <section className="bg-[#7c542f1c] mt-2 rounded flex flex-col pt-4 w-full">
            <NavLink onClick={() => setOpen(false)} to="/fashion/male">
              <People /> About Us
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/fashion/female">
              <DeliveryDining /> Delivery Stations
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/electronics">
              <ArrowBack /> Return Policy
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/devices">
              <Store />
              Official Stores
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/others">
              <ChatBubbleOutlineRounded /> Chat with us
            </NavLink>
          </section>
        )}
      </div>
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  position: absolute;
  top: 3%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  position: fixed;
  z-index: 3;
  cursor: pointer;
  color: white;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#f97316" : "#C89E0E")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
  .first {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  .second {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  .third {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4); /* White with some opacity */
  z-index: 2; /* Place it above the sidebar */
  display: ${({ open }) => (open ? "block" : "none")};
`;

const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div className="first" />
    <div className="second" />
    <div className="third" />
  </StyledBurger>
);

export { Burger, Menu, Overlay };

