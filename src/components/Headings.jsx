import React from 'react'

const Headings = ({ title, description }) => {

    return (
        <div className='container mx-auto text-center pb-10'>
            <p className='bg-gradient-to-r from-orange-500 to-red-800 text-3xl text-transparent bg-clip-text tracking-wider'>{title}</p>
            <div className="container flex justify-center mt-8">
                <p className='text-center w-[70%] font-light text-sm tracking-wider'>{description}</p>
            </div>
        </div>

    )
}

export default Headings
