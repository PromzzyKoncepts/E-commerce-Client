import React from 'react'
import { NavLink } from 'react-router-dom'

const Producs = () => {
  return (
    <nav className='flex justify-between bg-slate-400 items-center px-3 text-blue-900 font-semibold'>
        <NavLink>Yes</NavLink>
        <NavLink>No</NavLink>
        <NavLink> Shop</NavLink>
        <NavLink>Ba bla blue</NavLink>
    </nav>
  )
}

export default Producs