import React, { useState } from 'react'
import {Trash, Trash2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { itemRemoved } from '../redux/features/cartSlice'

const Cart = () => {
  const allCartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  console.log(allCartItems);

  return (
    <>
      {allCartItems.length < 1
        ? (<h1 className='text-3xl text-center font-mono font-bold'>There are no items in your cart</h1>)
        : (
          <main className='p-4 bg-slate-200 flex flex-col items-center justify-center'>
            <div className="w-[85%]">
              <h1 className='text-2xl text-center font-medium'>{`Cart (${allCartItems.length})`}</h1>
              {allCartItems.map((item) => (
                <div className=" flex gap-4 mb-8 pb-4 border-b  border-slate-600" key={item.id}>
                  <section className='cart-items flex-1'>
                    <div className="top flex">
                      <div className="left img mr-5 mb-5 ">
                        <img src={item.image} alt="" className='w-44 h-44' />
                      </div>
                      <div className="right flex-1">
                        <div className=" flex items-center justify-between font-semibold text-lg">
                          <h3>{item.title}</h3>
                          <h3>${item.price}</h3>
                        </div>
                        <article className='my-3'>{item.description}</article>
                        <p >Ratings:{item.rating.rate}</p>
                      </div>
                    </div>
                    <div className="bottom flex items-center justify-between">
                      <button className="remove text-red-500 flex items-center" onClick={() => dispatch(itemRemoved(item.id))}>
                        <Trash2 /> Remove
                      </button>
                      <div className="qty">
                        <button className="dec px-4 py-2 bg-orange-400 " onClick={() => setCount((prev) => prev - 1)}>
                          -
                        </button>
                        <span className='mx-2'>
                          {count}
                        </span>
                        <button className="incr px-4 py-2 bg-orange-400 " onClick={() => setCount((prev) => prev + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                  </section>
                  <aside className="summary bg-zinc-200 p-4">
                    <h1 className='text-md font-medium text-center'>Cart Summary</h1>
                    <div className="flex justify-between p-6">
                      <h4>Subtotal</h4>
                      <h3 className='font-bold'>#xxx</h3>
                    </div>
                    <button className=' p-6'>
                      <Link to='/checkout'>Checkout #xxx</Link>
                    </button>
                  </aside>
                </div>
              ))}
            <button  className='text-red-800 font-semibold flex items-center self-start'><Trash /> Clear All</button>
            </div>
          </main>)}

    </>
  )
}

export default Cart