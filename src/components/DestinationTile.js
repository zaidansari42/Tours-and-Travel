import React from 'react';

export default function DestinationTile({ countryName, index }) {

    const imageUrl = `https://source.unsplash.com/random/?${countryName}`;

    const gridSpan = index % 2 === 0 ? 2 : 1;

    return (
        <div
            className={`bg-cover bg-center min-h-60 row-span-${gridSpan} flex justify-center items-end rounded-xl sm:justify-start`}
            style={{ backgroundImage: `url('${imageUrl}')` }}
        >
            <div className='bg-orange-200 border-2 backdrop-blur m-2 py-1 px-4 rounded-full'>{countryName}</div>
        </div>
    );
}
