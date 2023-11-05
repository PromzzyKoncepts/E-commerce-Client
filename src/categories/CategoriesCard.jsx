import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Search } from '@mui/icons-material';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import { itemAdded } from '../redux/features/cartSlice';
import { NavLink } from 'react-router-dom';

const CategoriesCard = ({ apiLink, category }) => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [shopped, setShopped] = useState({})

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${apiLink}`)
            .then(res => {
                setIsLoading(false)
                setProducts(res.data.message)
            })
    }, [apiLink])

    const handleShopNow = (product) => {
        dispatch(itemAdded(product))
        setShopped({ ...shopped, [product._id]: true }) //copies the original shopped state and adds a new product.id property dynamically and sets its value to true
        //The angle brackets tell JavaScript that the product id is a variable, and that the property name should be evaluated dynamically.
    }
    console.log(products);
    return (
        <>
            {isLoading
                ?
                <div className='p-8 w-10/12 mx-auto flex items-center justify-center h-[70vh]'>
                    <p className=' animate-spin h-5 w-5 border-2 border-zinc-800 border-x-transparent rounded-full p-4 '></p>
                </div>
                :
                (<aside className='p-6 w-10/12 mx-auto bg-slate-50 my-3'>
                    {Array.isArray(products)
                        ?
                        (<div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                            {products.map((product) => (
                                <div className="relative bg-white hover:shadow-lg hover:rounded-md duration-500 p-4 flex flex-col" key={product._id}>
                                    <div className="flex-1 ">
                                        <NavLink to='description'>
                                            <img src={product.images[0]} alt={product.description} className='h-full w-full' />
                                        </NavLink>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <div className="flex gap-3">
                                            <FavoriteBorderIcon />
                                            <Search />
                                        </div>
                                        <button className="flex items-center text-xl font-medium text-slate-900" onClick={() => handleShopNow(product)} >
                                            <ShoppingBag className={`${shopped[product._id] ? 'opacity-75' : 'opacity-100'}`} />
                                            {shopped[product._id] ? (<span className='opacity-75'>Shopped</span>) : (<span>Shop Now</span>)}
                                            {/* above code renders based on the state of the product.id variable */}
                                        </button>
                                    </div>
                                    <h2 className='font-semibold text-base'><NavLink to='description' className='no-underline hover:underline'>{product.name}</NavLink></h2>
                                    <div className="flex items-center justify-between">
                                        <p className=' opacity-70 text-sm'>{category}</p>
                                        <p className='font-medium text-sm'>₦{product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>)
                        :
                        (<h1 className="text-center text-slate-500">No products found in this category.</h1>)}

                </aside>)
            }
        </>
    )
}

export default CategoriesCard