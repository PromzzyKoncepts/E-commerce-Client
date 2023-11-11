import React, { useRef, useState, useEffect } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';

const LatestArrivals = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false);
    let totalPages = useRef()
    const itemsPerPage = 8
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    const url = "https://aphia-dev.onrender.com/api/products"
    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async ()=>{
            const res = await axios.get(url)
            setIsLoading(false)
            const targetRes = res.data.message
            const reversed = targetRes.reverse()
            const products = reversed.slice(0, 50)
            totalPages.current = Math.ceil(products.length/itemsPerPage)
            const productsToDisplay = targetRes.slice(startIndex, endIndex)
            setData(productsToDisplay)
        }
        fetchData()
    }, [currentPage])
    
    const handlePrev = ()=> setCurrentPage((prev)=>prev-1)
    const handleNext = ()=> setCurrentPage((prev)=>prev+1)
  return (
    <>
      {isLoading ? (
        <div className="p-8 w-10/12 mx-auto flex items-center justify-center h-[70vh]">
          <p className=" animate-spin h-5 w-5 border-2 border-zinc-800 border-x-transparent rounded-full p-4 "></p>
        </div>
      ) : (
        <div className="w-10/12 mx-auto mt-4 bg-slate-200 pt-6 p-4 rounded-t-lg relative">
          <div className="">
            <h2 className="pb-4 text-3xl mx-auto w-fit mb-4">
              Latest Arrivals
            </h2>
            <div className="flex flex-wrap flex-grow justify-center md:grid md:grid-cols-4 gap-[0.6rem]">
              {data.map((item) => (
                <div
                  key={item._id}
                  className="bg-white pb-2 px-2 pt-6 rounded relative no-underline text-black"
                >
                  <div className="bg-white">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className=" basis-80  object-contain"
                    />
                  </div>
                  <div className="">
                    <div className="flex justify-between items-center gap-2 ">
                      <p className="font-semibold mt-6">{item.name}</p>
                      <FavoriteBorderIcon />
                    </div>
                    <div className="flex justify-between">
                      <p className="font-semibold text-sm">
                        &#8358;{item.price}
                      </p>
                      <p className="text-sm text-amber-600 p-1 rounded hover:bg-amber-100 active:bg-amber-200">
                        <ShoppingBagIcon />
                        shop now
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-auto w-fit flex gap-5 shadow-md p-2 mt-2 rounded-sm bg-orange-400 h-10 active:bg-orange-500">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="disabled:opacity-40"
              >
                {<ArrowBackIosIcon />}
              </button>
              <p className="">
                {currentPage} of {totalPages.current}
              </p>
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
      )}
    </>
  );
}

export default LatestArrivals