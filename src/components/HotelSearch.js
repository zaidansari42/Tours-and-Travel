import React from 'react'
import InputField from './InputField';

export default function HotelSearch() {
    return (
        <div className='flex justify-center relative'>
            <div className='grid grid-flow-col auto-cols-auto divide-x divide-black gap-6 text-start place-content-stretch w-full max-w-2xl bg-zinc-200 px-6 py-3 rounded-full m-2 absolute hotel-search'>
                <InputField leading='Location' following='Where to?' />
                <InputField leading='Check-in' following='Select Date' />
                <InputField leading='Guests' following='Select Date' />
                <InputField leading='Location' following='Number Of' searchButton={true} />
            </div>
        </div>
    )
}
