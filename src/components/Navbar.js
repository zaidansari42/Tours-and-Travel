import React from 'react'

export default function Navbar() {
  return (
    <header>
        <div className='flex justify-between text-base my-4 mx-6'>
          <div>
            <ul className='flex gap-4 p-2'>
              <li>Discover</li>
              <li>Destinations</li>
              <li>Packages</li>
              <li>Explore</li>
            </ul>
          </div>
          <div className='flex gap-4'>
            <button className='border-solid border-2 px-8 rounded-3xl'>
              Join
            </button>
            <button className='border-solid border-2 px-8 rounded-3xl'>
              Login
            </button>
          </div>
        </div>
      </header>
  )
}
