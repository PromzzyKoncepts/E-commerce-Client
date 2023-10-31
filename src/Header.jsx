import React from 'react'

const Header = () => {
  return (
    <div className='bg-red-500 p-4 flex'>
      <h1>Aphie</h1>
      <div className='flex-1 flex justify-end pe-[200px]'>
        <span className='pe-5'>Login</span>
        <span>Register</span>
       </div>
    </div>
  )
}

export default Header