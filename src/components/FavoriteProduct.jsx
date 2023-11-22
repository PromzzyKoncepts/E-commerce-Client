import React, { useState} from "react";
import axios from "axios";

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';

function FavoriteProduct({productObject, favoriteId}) {
    const token = localStorage.getItem("authToken");

    console.log(`https://aphia-dev.onrender.com/api/favorites/${favoriteId}/remove`)
    
    const [favoriteLoading, setFavoriteLoading] = useState(false);
    const [favoriteError, setFavoriteError] = useState(null);
    
    
    const removeFromFavorite = async () => {
        setFavoriteLoading(true);
        setFavoriteError(null);
        try {
            const res = axios.delete(
                `https://aphia-dev.onrender.com/api/favorites/${favoriteId}/remove`,
                
                {
                    headers: {
                        authorization: token,
                    },
                }
            );
            console.log(res);
            if (res.data.success === true) {
                console.log("Removed from favorites");
            }
        } catch (error) {}
    };

  return (
    <a href={productObject.product} key={productObject._id} className='bg-white pb- px-2 pt-6 rounded relative no-underline'>
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
            {/* <span  className='text-red-500 mt-6'><FavoriteIcon /></span> */}
            <button  className='text-red-500 mt-6'>
                                    <FavoriteIcon
                                        onClick={() =>
                                            removeFromFavorite(productObject._id)
                                        }
                                    />
                                </button>

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

export default FavoriteProduct