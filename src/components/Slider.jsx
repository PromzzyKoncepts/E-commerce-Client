import {
    CCarousel,
    CCarouselCaption,
    CCarouselItem,
    CImage,
  } from "@coreui/react";
  import "@coreui/coreui/dist/css/coreui.min.css";
  // import "bootstrap/dist/css/bootstrap.min.css";
  import fashion2 from "../assets/fashion2.jpg";
  import fashion1 from "../assets/Fashion1.jpg";
  import blackfriday1 from "../assets/black friday.jpg";
  import blackfriday2 from "../assets/blackfriday2.jpg";
  import { Link } from "react-router-dom";
  import React, { useState } from "react";
  import "../stylesheets/Slider.css"; // Create a CSS file for styling
  
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
      <div className={`w-10/12 m-auto  ${hoveredIndex ? "blacked" : ""}`}>
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
                className={`block w-full ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                src={item.image}
                alt={`slide ${index + 1}`}
              />
              <CCarouselCaption className="hidden md:block">
                <Link
                  to={item.link}
                  className={`category-link text-white no-underline mb-5 ${
                    hoveredIndex === index ? "visible" : ""
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
    );
  };
  
  export default Slider;