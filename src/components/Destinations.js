import React from 'react'
import DestinationTile from './DestinationTile'

export default function Destinations() {
    const countries = [
        {
            name: 'France',
        },
        {
            name: 'Japan',
        },
        {
            name: 'United States',
        },
        {
            name: 'Brazil',
        },
        {
            name: 'Australia',
        },
        {
            name: 'India',
        },
        {
            name: 'Canada',
        },
        {
            name: 'South Africa',
        },
        {
            name: 'Saudi Arabia',
        },
    ];



    return (
        <div className='bg-grey mt-10 '><h3>Destinations</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-4'>
                {countries.map((country, index) => <DestinationTile countryName={country?.name ?? 'Not found'} countryUrl={country?.imageUrl} key={index} index={index} />)}
            </div>
        </div>
    )
}
