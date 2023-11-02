import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Heart, Search } from 'lucide-react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useDispatch } from 'react-redux';
import { itemAdded } from '../redux/features/cartSlice';


const Males = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [shopped, setShopped] = useState({})

    useEffect(() => {
        setIsLoading(true)
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setIsLoading(false)
                setProducts(res.data)
            })
    }, [])

    const handleShopNow = (product) => {
        dispatch(itemAdded(product))
        setShopped({ ...shopped, [product.id]: true }) //copies the original shopped state and adds a new product.id property dynamically and sets its value to true
        //The angle brackets tell JavaScript that the product id is a variable, and that the property name should be evaluated dynamically.
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
                                <div className="flex items-center justify-between py-4">
                                    <div className="flex gap-3">
                                        <Heart />
                                        <Search />
                                    </div>
                                    <button className="flex gap-3 items-center text-xl font-medium text-slate-900" onClick={() => handleShopNow(product)} >
                                        <ShoppingBagIcon className={`${shopped[product.id] ? 'opacity-75' : 'opacity-100'}`} />
                                        {shopped[product.id] ? (<span className='opacity-75'>Shopped</span>) : (<span>Shop Now</span>)}
                                        {/* above code renders based on the state of the product.id variable */}
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

