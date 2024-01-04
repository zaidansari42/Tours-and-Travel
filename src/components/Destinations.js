import React from 'react'
import DestinationTile from './DestinationTile'

export default function Destinations() {
    const countries = [
        { id: 293920, name: 'France' },
        { id: 584589, name: 'Japan' },
        { id: 393948, name: 'United States' },
        { id: 594843, name: 'Brazil' },
        { id: 100003, name: 'Australia' },
        { id: 345353, name: 'India' },
        { id: 345767, name: 'Canada' },
        { id: 956985, name: 'South Africa' },
        { id: 983489, name: 'Saudi Arabia' },
    ];



    return (
        <div className='bg-grey mt-10 '><h3 className='text-2xl text-center sm:text-start my-3  border-b border-black'>Popular Destinations</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-4'>
                {countries.map((country, index) => <DestinationTile countryName={country?.name ?? 'Not found'} key={country.id} index={index} />)}
            </div>
        </div>
    )
}
