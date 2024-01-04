import React from 'react'
import arrowIcon from './../assets/right-arrow.png';

export default function InputField({ leading, following, searchButton }) {
    return (
        <div className={searchButton === true ? "ps-4 flex justify-between" : "ps-4"}><ul>
            <li className='font-medium'>{leading}</li>
            <li>{following}</li>
        </ul>
            {searchButton === true ? <div className='grid place-content-center bg-orange-500 px-2 rounded-2xl'><button><img src={arrowIcon} alt='Search Ivcon' className='invert' /></button></div> : <></>}
        </div>
    )
}
