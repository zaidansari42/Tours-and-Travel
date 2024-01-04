import React from 'react'
import InputField from './InputField';

export default function HotelSearch() {
    return (
        <div className='flex justify-center relative'>
            <div className='grid grid-cols-2 auto-rows-auto divide-black divide-x text-start place-content-stretch w-full max-w-2xl bg-zinc-200 px-8 py-3 rounded-full m-2 hotel-search  md:grid-cols-4 md:divide-x md:absolute md:px-1'>
                <InputField leading='Location' following='Where to?' />
                <InputField leading='Check-in' following='Select Date' />
                <InputField leading='Check-out' following='Select Date' />
                <InputField leading='Guests' following='Number Of' searchButton={true} />
            </div>
        </div>
    )
}
