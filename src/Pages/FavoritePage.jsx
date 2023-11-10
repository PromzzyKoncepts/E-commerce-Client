import React, { useState, useRef, useEffect } from "react";
// import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import phoneImg from "../assets/phoneImg.png";
import axios from "axios";
import FavoriteProduct from "../components/FavoriteProduct";

const FavoritePage = () => {
    const productObject = {
        id: 1,
        href: "",
        imageAlt: "",
        imagSrc: phoneImg,
        price: "$20",
        category: "favourites",
        name: "Shirt",
    };
    // const baseUrl = 'https://aphia-dev.onrender.com/api/favorites';

    const [currentPage, setCurrentPage] = useState(1);
    let totalPages = useRef();
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const itemsPerPage = 15;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // const products = new Array(50).fill(productObject);
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

    // const makeRequest = ()=>{

    //     axios
    //     .post(baseUrl, { Favorites })
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    // };
    return (
        <div>
            <div className="w-10/12 mx-auto mt-4 bg-slate-200 pt-6 p-4 rounded-t-lg relative">
                <div className="">
                    <h2 className="pb-4 text-3xl mx-auto w-fit mb-4">
                        Favorites
                    </h2>
                    <div className="grid grid-cols-5 gap-[0.6rem]  ">
                        {productsToDisplay?.map((item) => (
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
            </div>
        </div>
    );
};

export default FavoritePage;
