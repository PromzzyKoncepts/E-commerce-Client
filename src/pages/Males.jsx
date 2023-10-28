import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Heart, Search } from 'lucide-react'
import { HiShoppingBag } from 'react-icons/hi'
import { useDispatch } from 'react-redux';
import { itemAdded } from '../redux/features/cartSlice';


const Males = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setIsLoading(false)
                setProducts(res.data)
            })
    }, [])

    const handleShopNow = (product) => {
        // setClicked(true)
        dispatch(itemAdded(product))
    }
    return (
        <>
            {isLoading
                ?
                <div className='p-8'>
                    <p className=' animate-spin h-5 w-5 border-2 border-zinc-800 border-x-transparent rounded-full p-4 '></p>
                </div>
                :
                (<aside className='p-6'>
                    <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                        {products.map((product) => (
                            <div className="relative hover:shadow-lg hover:rounded-md duration-500 p-4 flex flex-col" key={product.id}>
                                <span className='absolute p-2 top-4 text-sm left-00 bg-red-700 text-white '>Hot</span>
                                <div className="flex-1">
                                    <img src={product.image} alt={product.title} className='h-full w-full' />
                                </div>
                                <div className="flex  items-center justify-between py-4">
                                    <div className="flex gap-3">
                                        <Heart />
                                        <Search />
                                    </div>
                                    <button className="flex gap-3 items-center text-xl font-medium" onClick={() => handleShopNow(product)} disabled={clicked}>
                                        <HiShoppingBag />
                                        Shop Now
                                    </button>
                                </div>
                                <h2 className='font-semibold text-base'>{product.title}</h2>
                                <div className="flex items-center justify-between">
                                    <p className=' opacity-70 text-sm'>{product.category}</p>
                                    <p className='font-medium text-sm'>${product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>)
            }
        </>
    )
}

export default Males

