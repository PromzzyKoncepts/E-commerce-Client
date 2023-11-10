import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';

function FavoriteProduct({productObject}) {
    console.log(productObject)
  return (
    <a href={productObject.href} key={productObject.id} className='bg-white pb- px-2 pt-6 rounded relative no-underline'>
    <div className='bg-white flex justify-between mt-2'>
        <img src={productObject.images[0]} alt={productObject.imageAlt} />
    </div>
    <div className='text-black '>
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
            </div>
           
        </div>
        <div className='flex justify-between mt-2'>
        
            <p className='font-semibold mt-6'>{productObject.name}</p>
            <span  className='text-red-500 mt-6'><FavoriteIcon /></span>

        </div>
        <div className='flex justify-between mt-2'>
            {/* <p className='font-light'>{productObject.category}</p> */}

            <h3 className='font-medium text-base'>&#8358;{productObject.price}</h3>
            <p className='font-semibold'><ShoppingBagIcon />shop now</p>

        </div>
    </div>
    </a>
  )
}

export default FavoriteProduct;