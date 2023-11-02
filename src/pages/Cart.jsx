import React from 'react'
import { Trash, Trash2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import { calcTotal, clearAll, itemDecreased, itemIncreased, itemRemoved } from '../redux/features/cartSlice'

const Cart = () => {
  const allCartItems = useSelector((state) => state.cart.items) //access the items array property in the state
  const dispatch = useDispatch()
  dispatch(calcTotal()) //calls the calcTotal function to ensure it updates as changes in quantity are made
  const total = useSelector((state) => state.cart.total) //access the computed value of the total property in the state

  const ratings = (rating) => {
    if (rating < 1) {
      return (
        <>
          <StarIcon />
          
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </>
      )
    } else if (rating < 2) {
      return (
        <>
          <StarIcon className=' text-orange-500' />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </>
      )
    } else if (rating < 3) {
      return (
        <>
          <StarIcon className=' text-orange-500' />
          <StarIcon className=' text-orange-500' />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </>
      )
    } else if (rating < 4) {
      return (
        <>
          <StarIcon className=' text-orange-500' />
          <StarIcon className=' text-orange-500' />
          <StarIcon className=' text-orange-500' />
          <StarIcon />
          <StarIcon />
        </>
      )
    } else if (rating < 5) {
      return (
        <>
          <StarIcon className=' text-orange-500' />
          <StarIcon className=' text-orange-500' />
          <StarIcon className=' text-orange-500' />
          <StarIcon className=' text-orange-500' />
          <StarIcon />
        </>
      )
    } else {
      return (
        <>
          <StarIcon className=' text-orange-500' />
          <StarIcon className=' text-orange-500' />
          <StarIcon className=' text-orange-500' />
          <StarIcon className=' text-orange-500' />
          <StarIcon className=' text-orange-500' />
        </>
      )
    }
  }

  return (
    <>
      {allCartItems.length < 1
        ? (<h1 className='text-3xl text-center font-mono font-bold'>There are no items in your cart</h1>)
        : (
          <main className='p-4 flex flex-col items-center justify-center'>
            <div className="w-[90%] sm:w-[99%] md:w-[92%]">
              <h1 className='text-2xl text-center font-medium'>{`Cart (${allCartItems.length})`}</h1>
              <div className="flex flex-col sm:flex-row gap-9">
                <div className="w-full sm:w-[74%] ">
                  {allCartItems.map((item) => (
                    <div className="  mb-8 pb-4 border-b  border-slate-200" key={item.id}>
                      <section className='cart-items flex-1'>
                        <div className="top flex flex-col sm:flex-row">
                          <div className="left img mr-5 mb-5 ">
                            <img src={item.image} alt="" className='w-full h-full sm:w-44 sm:h-44' />
                          </div>
                          <div className="right flex-1">
                            <div className=" flex items-center justify-between font-semibold text-lg">
                              <h3 className='font-mono text-lg sm:text-xl'>{item.title}</h3>
                              <h3>₦{item.price}</h3>
                            </div>
                            <article className='my-3 font-[poppins] uppercase'>{item.category}</article>
                            <p >{ratings(item.rating.rate)} </p>
                          </div>
                        </div>
                        <div className="bottom flex items-center justify-between">
                          <button className="remove hover:text-red-500 flex items-center hover:bg-inherit bg-red-500 text-white py-3 ps-0 pr-3 shadow-md rounded-md" onClick={() => dispatch(itemRemoved(item.id))}>
                            <Trash2 /> Remove
                          </button>
                          <div className="qty">
                            <button className="dec px-4 py-2 bg-orange-400 " onClick={() => dispatch(itemDecreased(item.id))} disabled={item.quantity <= 1}>
                              -
                            </button>
                            <span className='mx-2'>
                              {item.quantity}
                            </span>
                            <button className="incr px-4 py-2 bg-orange-400 " onClick={() => dispatch(itemIncreased(item.id))}>
                              +
                            </button>
                          </div>
                        </div>
                      </section>
                    </div>
                  ))}
                </div>
                <aside className="summary bg-zinc-200 p-4 w-full sm:w-[25%] md:h-fit shadow-lg">
                  <h1 className='text-md lg:text-lg font-semibold text-center'>Cart Summary</h1>
                  <div className="flex justify-between p-6">
                    <h4>Subtotal</h4>
                    <h3 className='font-bold'>{`₦${total}`}</h3>
                  </div>
                  <button className='bg-orange-400 hover:bg-green-600 py-2 text-white w-full flex items-center justify-center rounded-sm shadow-lg font-bold'>
                    <Link to='/checkout'>{`Checkout (₦${total})`}</Link>
                  </button>
                </aside>
              </div>
              <button className='text-red-800 font-semibold flex items-center self-start py-3 ps-0 pr-3 hover:bg-red-800 hover:text-white rounded-md' onClick={() => dispatch(clearAll())}><Trash /> Clear All</button>
            </div>
          </main>)}

    </>
  )
}

export default Cart