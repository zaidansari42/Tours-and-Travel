import React from 'react'

export default function ExclusiveOffer() {
    return (
        <div className='bg-zinc-200 rounded-xl my-3 p-4 flex flex-col gap-2 md:flex sm:flex-row justify-between sm:gap-16 sm:text-start'><div>
            <h4 className='font-bold'>Exclusive Offers Await!</h4>
            <p>Want to reveive great offers and unbeatable prices for your adventure? Join our travel club now</p>
        </div>
            <div className='border-2 border-black rounded-full bg-white py-1 grid place-content-center p-3'>
                <button>Join Now</button>
            </div>
        </div>
    )
}
