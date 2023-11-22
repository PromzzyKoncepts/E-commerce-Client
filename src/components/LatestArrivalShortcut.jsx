import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { itemAdded } from "../redux/features/cartSlice";
import Favorite from "@mui/icons-material/Favorite";
import CategoriesCard from "../categories/CategoriesCard";
import { ToastContainer, toast } from "react-toastify";

const LatestArrivalShortcut = () => {
    const [data, setData] = useState([]);
    const [shopped, setShopped] = useState({});

    const url = "https://aphia-dev.onrender.com/api/products";
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(url);
            const targetRes = res.data.message;
            const reversed = targetRes.reverse();
            const products = reversed.slice(0, 4);
            setData(products);
        };
        fetchData();
    }, []);

    const dispatch = useDispatch();
    const handleShopNow = (product) => {
        dispatch(itemAdded(product));
        setShopped({ ...shopped, [product._id]: true }); //copies the original shopped state and adds a new product.id property dynamically and sets its value to true
        //The angle brackets tell JavaScript that the product id is a variable, and that the property name should be evaluated dynamically.
    };

    const [favoriteLoading, setFavoriteLoading] = useState(false);
    const [favoriteError, setFavoriteError] = useState(null);
    // const notify = () => toast("added!");
    const token = localStorage.getItem("authToken");
    const [products, setProducts] = useState([]);

    const addToFavorite = async (id) => {
        setFavoriteLoading(true);
        setFavoriteError(null);
        try {
            const res = axios.post(
                "https://aphia-dev.onrender.com/api/favorites/add",
                {
                    product_id: id,
                },
                {
                    headers: {
                        authorization: token,
                    },
                }
            );
            res.then((response) => {
                console.log(response);

                if (response.data.success === true) {
                    toast.success("Product has been Added!", {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            });
        } catch (error) {console.error(error)}
    };

    return (
        <div data-aos="fade-up" className="">
            <div className="w-10/12 mx-auto mt-4 bg-slate-200 pt-6 p-4 rounded-t-lg relative">
                <div className="">
                    <h2 className="pb-4 text-3xl mx-auto w-fit mb-4">
                        Latest Arrivals
                    </h2>
                    <Link
                        to="/latest-arrivals"
                        className="bg-red-600 text-white  p-1 rounded-tr-lg absolute top-0 right-0 no-underline hover:underline"
                    >
                        Show All
                    </Link>
                    <div className="flex overflow  md:grid md:grid-cols-4  gap-3">
                        {data.map((item) => (
                            <div
                                key={item._id}
                                className="bg-white text-black pb-2 px-6 pt-6 rounded relative no-underline"
                            >
                                <div className="bg-white">
                                    <img
                                        src={item.images[0]}
                                        alt={item.name}
                                        className=" bg-white md:w-full md:min-w-full min-w-[30vw] h-48 object-contain"
                                    />
                                </div>
                                

                  
                  
                                <div className="flex items-center justify-between py-4">
                                    <div className="flex gap-3">
                                        <button className="  hover:text-red-500">
                                            <FavoriteBorderIcon
                                                onClick={() =>
                                                    addToFavorite(item._id)
                                                }
                                            />
                                        </button>
                                    </div>


                                    <div className="flex justify-between">
                                        <p className="font-semibold text-sm">
                                            &#8358;
                                            {Intl.NumberFormat("en-US", {
                                                maximumFractionDigits: 0,
                                            }).format(item.price)}
                                        </p>
                                        <button
                                            className="flex items-center  font-medium text-slate-900"
                                            onClick={() => handleShopNow(item)}
                                        >
                                            <ShoppingBagIcon
                                                className={`${
                                                    shopped[item._id]
                                                        ? "opacity-75"
                                                        : "opacity-100"
                                                }`}
                                            />
                                            {shopped[item._id] ? (
                                                <span className="opacity-75">
                                                    Shopped
                                                </span>
                                            ) : (
                                                <span>Shop Now</span>
                                            )}
                                            {/* above code renders based on the state of the product.id variable */}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestArrivalShortcut;
