import React, { useState, useRef } from "react";
// import axios from "axios";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import phoneImg from "../assets/phoneImg.png"

const FavoritePage = () => {
    const productObject = {
        id: 1,
        href: "",
        imageAlt: "",
        imagSrc: phoneImg,
        price: "$20",
        category: "favourites",
        name: "Shirt"
    };
    // const baseUrl = 'https://aphia-dev.onrender.com/api/favorites'; 

    const [currentPage, setCurrentPage] = useState(1)
    let totalPages = useRef()
    const itemsPerPage = 15
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const products = new Array(50).fill(productObject)
    totalPages.current = Math.ceil(products.length/itemsPerPage)
    const productsToDisplay = products.slice(startIndex, endIndex)
    const handlePrev = ()=> setCurrentPage((prev)=>prev-1)
    const handleNext = ()=> setCurrentPage((prev)=>prev+1)


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
      return(
      <div>
            <div className="w-10/12 mx-auto mt-4 bg-slate-200 pt-6 p-4 rounded-t-lg relative">
                <div className="">
                    <h2 className='pb-4 text-3xl mx-auto w-fit mb-4'>Favorites</h2>
                    <div className='grid grid-cols-5 gap-[0.6rem]  '>
                        {
                            productsToDisplay.map(item => (
                                <a href={productObject.href} key={productObject.id} className='bg-white pb-2 px-2 pt-6 rounded relative no-underline'>
                                    <div className='bg-white'>
                                        <small className='text-slate-100 bg-red-500 p-1 absolute top-0 left-0 rounded-tl-sm'>{productObject.type}</small>
                                        <img src={productObject.imagSrc} alt={productObject.imageAlt} />
                                    </div>
                                    <div className='text-black '>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex gap-2 items-center'>
                                                <FavoriteBorderIcon />
                                                <SearchIcon />
                                            </div>
                                            <div className=''>
                                                <p className='font-semibold'><ShoppingBagIcon />shop now</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='font-semibold mt-6'>{productObject.name}</p>
                                        </div>
                                        <div className='flex justify-between mt-2'>
                                            <p className='font-light'>{productObject.category}</p>
                                            <h3 className='font-semibold'>{productObject.price}</h3>
                                        </div>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                    <div className='mx-auto w-fit flex gap-5 shadow-md p-2 mt-2 rounded-sm bg-orange-400 hover:bg-slate-200'>
                        <button onClick={handlePrev} disabled={currentPage === 1} className='disabled:opacity-40'>{<ArrowBackIosIcon />}</button>
                        <button onClick={handleNext} disabled={currentPage === totalPages.current} className=' disabled:opacity-40'>{<ArrowForwardIosIcon />}</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FavoritePage;
