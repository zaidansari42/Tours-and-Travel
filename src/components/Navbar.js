import React from 'react'

export default function Navbar() {
  return (
    <header>
      <div className='flex flex-col justify-center md:flex-row justify-between text-base mx-6 my-4'>
        <div>
          <ul className='flex justify-evenly gap-4 p-2'>
            <li>Discover</li>
            <li>Destinations</li>
            <li>Packages</li>
            <li>Explore</li>
          </ul>
        </div>
        <div className='flex gap-4 justify-end mx-8 my-2'>
          <button className='border-solid border-2 px-8 rounded-3xl py-1'>
            Join
          </button>
          <button className='border-solid border-2 px-8 rounded-3xl bg-orange-500 text-white py-1'>
            Login
          </button>
        </div>
      </div>
    </header>
  )
}
