import {
    CCarousel,
    CCarouselCaption,
    CCarouselItem,
    CImage,
} from "@coreui/react";
import { Link, NavLink } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import fashion2 from "../assets/fashion2.jpg";
import fashion1 from "../assets/Fashion1.jpg";
import blackfriday1 from "../assets/black friday.jpg";
import blackfriday2 from "../assets/blackfriday2.jpg";
// import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../stylesheets/Slider.css"; // Create a CSS file for styling
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import EarbudsIcon from "@mui/icons-material/Earbuds";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import IceSkatingIcon from "@mui/icons-material/IceSkating";

const Slider = () => {
    const slides = [
        {
            image: fashion2,
            title: "Flash Fashion Sales",
            desc: "",
            link: "/category1",
        },
        {
            image: fashion1,
            title: "Flash Fashion Sales",
            desc: "",
            link: "/category2",
        },
        {
            image: blackfriday2,
            title: "Flash Fashion Sales",
            desc: "",
            link: "/category3",
        },
        {
            image: blackfriday1,
            title: "Flash Fashion Sales",
            desc: "",
            link: "/category4",
        },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(true);

    return (
        <div className="md:flex flex-row-reverse w-10/12 mx-auto gap-3 m-3 md:w-full">
            <div
                className={`md:w-[70vw] md:h-[75vh]   ${
                    hoveredIndex ? "blacked" : ""
                }`}
            >
                <div className="flex flex-col gap-2 justify-between">
                    <CCarousel
                        controls
                        indicators
                        interval={3000}
                        wrap={true}
                        transition="crossfade"
                        className="rounded"
                    >
                        {slides.map((item, index) => (
                            <CCarouselItem
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <CImage
                                    className={`block md:w-[70vw] md:h-[75vh] object-cover  ${
                                        hoveredIndex === index ? "hovered" : ""
                                    }`}
                                    src={item.image}
                                    alt={`slide ${index + 1}`}
                                />
                                <CCarouselCaption className="hidden md:block">
                                    <Link
                                        to={item.link}
                                        className={`category-link text-white no-underline mb-5 ${
                                            hoveredIndex === index
                                                ? "visible"
                                                : ""
                                        }`}
                                    >
                                        Shop now
                                    </Link>
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </CCarouselCaption>
                            </CCarouselItem>
                        ))}
                    </CCarousel>
                </div>
            </div>
            <div
                data-aos="fade-right"
                className="rounded desktop item1 md:col-span-2 bg-slate-200 w-[30vw] "
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
            </div>
        </div>
    );
};

export default Slider;
