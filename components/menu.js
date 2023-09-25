'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Menu = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <div id='menu' className='w-full h-[90vh] mt-0 '>
            <div className='flex flex-col gap-5 mx-auto items-center'>
                <p className='text-6xl font-semibold mt-16'>Our Special Dishes</p>
                <p className='text-justify w-[25%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
            </div>
            <div className='flex justify-between px-44 mt-36'>
                <div
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                    className="relative w-[265px] h-[309px] flex flex-col border justify-center text-center gap-5 px-5 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md ">
                    <div className='absolute top-[-110px] left-[29px]'>
                        <img src="/dish-1.png" alt="Dish" width="207" height="207" />
                    </div>
                    <div className="absolute top-[-60px] right-0 bg-black  w-[54px] h-[54px] rounded-full flex items-center justify-center">
                        <p className='text-base text-white font-bold text-xl'>
                            12$
                        </p>
                    </div>
                    <p className="text-xl font-bold">Lumpia with Sauce</p>
                    <p>Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                <div
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                    className='relative w-[265px] h-[309px] flex flex-col border justify-center text-center gap-5 px-5 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md'>
                    <div className='absolute top-[-110px] left-[29px]'>
                        <img src="/dish-2.png" alt="Dish" width="207" height="207" />
                    </div>
                    <div className="absolute top-[-60px] right-0  bg-black  w-[54px] h-[54px] rounded-full flex items-center justify-center">
                        <p className='text-base text-white font-bold text-xl'>
                            14$
                        </p>
                    </div>
                    <p className='text-xl font-bold'>Fish and Veggie</p>
                    <p className=''>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>
                </div>
                <div
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                    className='relative w-[265px] h-[309px] flex flex-col border justify-center text-center gap-5 px-5 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md'>
                    <div className='absolute top-[-110px] left-[29px]'>
                        <img src="/dish-3.png" alt="Dish" width="207" height="207" />
                    </div>
                    <div className="absolute top-[-60px] right-0  bg-black  w-[54px] h-[54px] rounded-full flex items-center justify-center">
                        <p className='text-base text-white font-bold text-xl'>
                            12$
                        </p>
                    </div>
                    <p className='text-xl font-bold'>Tofu Chili</p>
                    <p className=''>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>
                </div>
                <div
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                    className='relative w-[265px] h-[309px] flex flex-col border justify-center text-center gap-5 px-5 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md'>
                    <div className='absolute top-[-110px] left-[29px]'>
                        <img src="/dish-4.png" alt="Dish" width="207" height="207" />
                    </div>
                    <div className="absolute top-[-60px] right-0  bg-black  w-[54px] h-[54px] rounded-full flex items-center justify-center">
                        <p className='text-base text-white font-bold text-xl'>
                            10$
                        </p>
                    </div>
                    <p className='text-xl font-bold'>Egg and Cocumber</p>
                    <p className=''>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>
                </div>
            </div>

        </div>
    )
}

export default Menu
