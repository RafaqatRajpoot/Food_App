import React from 'react'

const Booking = () => {
    return (
        <div id='booking' className="w-full h-[90vh] mt-0 flex justify-center items-center">
            <div className='relative'>
                <img src='/dish-5.png' alt='Background Image' width="600" height="600" />
                <img className='absolute bottom-[190px] left-0' src='/leaf-1.png' alt='Leaf' width="80" height="100" />
                <img className='absolute bottom-[40px] left-[80px]' src='/leaf-2.png' alt='Leaf' width="100" height="100" />
                <img className='absolute top-[140px] right-[-10px]' src='/leaf-3.png' alt='Leaf' width="120" height="100" />
                <img className='absolute bottom-[20px] right-[200px]' src='/leaf-4.png' alt='Leaf' width="80" height="100" />
            </div>
            <div className='flex flex-col w-[40%]'>
                <p className="text-6xl text-center font-bold">Wecome to Our Restaurant</p>
                <p className='text-justify mx-auto mt-5 w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='flex justify-center gap-6 mt-10'>
                    <button className="px-8 py-4 w-fit text-white text-lg bg-black rounded-br-2xl rounded-tl-2xl hover:bg-opacity-75">
                        Menu
                    </button>
                    <button className="px-8 py-4 w-fit text-white text-lg bg-custom-orange rounded-br-xl rounded-tl-xl hover:bg-custom-light-orange">
                        Book a table
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Booking
