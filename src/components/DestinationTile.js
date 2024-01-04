import React from 'react';

export default function DestinationTile({ countryName, countryUrl, index }) {
    console.log(index, 'index');
    console.log(index % 2 === 0 ? 2 : 1);

    const imageUrl = `https://source.unsplash.com/random/?${countryName}`;

    return (
        <div
            className={`bg-cover bg-center min-h-60 row-span-${index % 2 === 0 ? 2 : 1}`}
            style={{ backgroundImage: `url('${imageUrl}')` }}
        >
            {countryName}
        </div>
    );
}
