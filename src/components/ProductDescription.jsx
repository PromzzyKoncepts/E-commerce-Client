import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { itemAdded } from '../redux/features/cartSlice';

const ProductDescription = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [images, setImages] = useState([])
    const [src, setSrc] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://aphia-dev.onrender.com/api/products/${id}`)
            .then((res) => {
                setIsLoading(false)
                setData(res.data.message)
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get(`https://aphia-dev.onrender.com/api/products/${id}`)
            .then((res) => {
                setIsLoading(false)
                setImages(res.data.message.images)
            })
    }, [])
    const handleImage = (e) => {
        images.forEach((url) => {
            if (url === e.target.src) {
                setSrc(url)
            }
        })
    }
    return (
        <>
            {isLoading ?
                (<div className='p-8 w-10/12 mx-auto flex items-center justify-center h-[70vh]'>
                    <p className=' animate-spin h-5 w-5 border-2 border-zinc-800 border-x-transparent rounded-full p-4 '></p>
                </div>
                ) :
                (
                    <main className='p-6 w-10/12 mx-auto bg-slate-50 my-3 relative flex'>
                        <aside className='w-1/3 bg-slate-50'>
                            <div className="flex flex-col items-center justify-center gap-6">
                                <div className="main flex-1 h-[90%] items-center justify-center">
                                    <img src={src || images[0]} alt="" />
                                </div>
                                <div className="buttom flex gap-4 ">
                                    {images.map((src) => (
                                        <div className="h-[4rem]" key={src}>
                                            <img
                                                src={src}
                                                alt=''
                                                className='h-full w-full'
                                                onClick={(e) => handleImage(e)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>
                        <section className='w-2/3 p-2'>
                            <h2 className='font-mono font-medium text-base md:text-lg '>{data.name}</h2>
                            <h3 className='font-extrabold text-lg'>₦ {data.price}</h3>
                            <p className='my-2'>{data.description}</p>
                            <div className="add">
                                <button
                                    className='uppercase bg-orange-500 text-white hover:bg-orange-700 block w-full rounded py-2'
                                    onClick={() => dispatch(itemAdded(data))}
                                >
                                    <AddShoppingCartIcon />
                                    add to cart
                                </button>
                            </div>
                        </section>
                    </main>
                )

            }
        </>
    )
}

export default ProductDescription