import React, { useRef, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import sneakers from "../assets/brown sneakers.jpeg"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function BestDeals() {

    const productObject = {
        id: 1,
        href: "",
        imageAlt: "brown sneakers",
        type: "Flash sale",
        imagSrc: sneakers,
        name: "sneakers",
        category: "shoes",
        price: "$20",
    };

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
    
    return(
        <div className=''>
            <div className="w-10/12 mx-auto mt-4 bg-slate-200 pt-6 p-4 rounded-t-lg relative">
                <div className="">
                    <h2 className='pb-4 text-3xl mx-auto w-fit mb-4'>Best Deals</h2>
                    <div className='grid grid-cols-5 gap-3 '>
                        {
                            productsToDisplay.map(item => (
                                <a href={productObject.href} key={productObject.id} className='bg-white pb-2 px-6 pt-6 rounded relative no-underline'>
                                    <div className='bg-white'>
                                        <small className='text-slate-100 bg-red-500 p-1 absolute top-0 left-0 rounded-tl-sm'>{productObject.type}</small>
                                        <img src={productObject.imagSrc} alt={productObject.imageAlt} />
                                    </div>
                                    <div className='text-black'>
                                        <div className='flex justify-between mt-3'>
                                            <div className='flex gap-2'>
                                                <FavoriteBorderIcon />
                                                <SearchIcon />
                                            </div>
                                            <div className='flex flex-row gap-1'>
                                                <ShoppingBagIcon />
                                                <p className='font-semibold'>shop now</p>
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
                    <div className='mx-auto w-fit flex gap-5 shadow-md p-2 mt-2 rounded-sm'>
                        <button onClick={handlePrev} disabled={currentPage === 1} className='disabled:opacity-40'>{<ArrowBackIosIcon />}</button>
                        <button onClick={handleNext} disabled={currentPage === totalPages.current} className='disabled:opacity-40'>{<ArrowForwardIosIcon />}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestDeals