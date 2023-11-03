import React from 'react'
import sneakers from "../assets/brown sneakers.jpeg"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';


function BestDealsShortcut() {

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
    const products = new Array(4).fill(productObject);
    return (
        <div className=''>
            <div className="w-10/12 mx-auto bg-slate-100 pt-6 p-4 rounded-t-lg relative">
                <div className="">
                    <h2 className='pb-4 text-5xl mx-auto w-fit mb-4'>Best Deals</h2>
                    <Link to="/best-deals" className='bg-red-600 text-white  p-1 rounded-tr-lg absolute top-0 right-0'>Show All</Link>
                    <div className='flex gap-3 '>
                        {
                            products.map(item => (
                                <a href={productObject.href} key={productObject.id} className='bg-white p-6 rounded relative'>
                                    <div className='bg-white'>
                                        <small className='text-slate-100 bg-red-500 p-1 absolute top-0 left-0 rounded-tl-sm'>{productObject.type}</small>
                                        <img src={productObject.imagSrc} alt={productObject.imageAlt} />
                                    </div>
                                    <div>
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
                </div>
            </div>
        </div>
  )
}

export default BestDealsShortcut