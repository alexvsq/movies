import React from 'react'

export default function Logo() {
    return (
        <a
            href='/'
            className='flex items-center text-xl font-semibold gap-2'>
            <p className='h-7 w-16 bg-primary flex justify-center items-center text-black rounded'>NEW</p>
            <p className='text-primary'>MOVIE</p>
        </a>
    )
}
