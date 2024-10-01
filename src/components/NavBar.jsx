import React from 'react'

const NavBar = () => {
  return (
    <div className='relative flex items-center justify-between px-4 py-2 sm:px-4 md:px-8 lg:px-16 font-serif'>
  {/* Search bar container */}
  <div className='flex items-center flex-1'>
    <input 
      type="text" 
      placeholder='Search Our Store' 
      className='border-yellow-400 border-2 p-1 rounded-lg' />
    <button className='border-2 border-yellow-400 text-black p-1 px-2 ml-2 rounded-lg'>Search</button>
  </div>
  {/* Logo */}
  <h1 className="text-lg sm:text-4xl mt-2 text-center flex-grow text-yellow-400">DAZZLE</h1>
  {/* Icons */}
  <div className='flex items-center space-x-4 flex-1 justify-end text-yellow-400'>
    <i className="fa-regular fa-user text-xl"></i>
    <i className="fa-solid fa-cart-shopping text-xl"></i>
  </div>
</div>

  )
}
export default NavBar
