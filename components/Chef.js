'use client';
import { AiFillCheckCircle } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Chef = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <div id='about' className="w-full h-[90vh] mt-0 flex justify-center items-center">
            <div className='flex flex-col w-[40%]'>
                <p className="text-6xl text-center font-bold">Our Expects Chef</p>
                <p className='text-justify mx-auto mt-5 w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='mt-12'>
                    <div className='flex gap-4'>
                        <div className='flex gap-2'>
                            <AiFillCheckCircle className='text-custom-orange w-[24px] h-[24px]' />
                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                        </div>
                        <div className='flex gap-2'>
                            <AiFillCheckCircle className='text-custom-orange w-[24px] h-[24px]' />
                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8'>
                        <div className='flex gap-2'>
                            <AiFillCheckCircle className='text-custom-orange w-[24px] h-[24px]' />
                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                        </div>
                        <div className='flex gap-2'>
                            <AiFillCheckCircle className='text-custom-orange w-[24px] h-[24px]' />
                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-8'>
                        <div className='flex gap-2'>
                            <AiFillCheckCircle className='text-custom-orange w-[24px] h-[24px]' />
                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                        </div>
                        <div className='flex gap-2'>
                            <AiFillCheckCircle className='text-custom-orange w-[24px] h-[24px]' />
                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center gap-6 mt-10' data-aos="fade-up"
                    data-aos-easing="ease-in-out">
                    <button className="px-8 py-4 w-fit text-white text-lg bg-black rounded-br-2xl rounded-tl-2xl hover:bg-opacity-75">
                        Menu
                    </button>
                    <button className="px-8 py-4 w-fit text-white text-lg bg-custom-orange rounded-br-xl rounded-tl-xl hover:bg-custom-light-orange">
                        Book a table
                    </button>
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-offset="200"
                data-aos-easing="ease-in-out">
                <img src='/chef.png' alt='Background Image' width="450" height="450" />
            </div>
        </div>
    )
}

export default Chef
