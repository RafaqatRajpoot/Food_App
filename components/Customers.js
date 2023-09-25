'use client';
import { AiTwotoneStar } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Customers = () => {
    return (
        <div id='customers' className='w-full h-[90vh] mt-0 '>
            <div className='flex flex-col gap-5 mx-auto items-center'>
                <p className='text-6xl font-semibold mt-16'>Our Happy Customers</p>
                <p className='text-justify w-[25%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            </div>
            <Swiper className='flex justify-around px-44'
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={9000}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className='relative w-[500px] h-[450px] flex flex-col justify-center text-center px-5'>
                        <div className='absolute top-[20px] right-[207px]'>
                            <img className='rounded-full' src="/client-1.png" alt="Pic" width="90" height="90" />
                        </div>
                        <div className='py-8 mt-10 border rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md'>
                            <div className='flex gap-1 justify-center text-custom-yellow'>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar className='text-gray-400' />
                            </div>
                            <p className='w-[70%] mx-auto mt-8 text-justify'>Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper
                            </p>
                            <p className='font-bold pt-4'>Ama Ampomah</p>
                            <p>CEO & Founder Inc </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-[500px] h-[450px] flex flex-col justify-center text-center px-5'>
                        <div className='absolute top-[20px] right-[207px]'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCAB8QYKhibTGBUVFRTF8UVV7jDXxrQ_n59Q&usqp=CAU" alt="Pic" width="90" height="90" />
                        </div>
                        <div className='py-8 mt-10 border rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md'>
                            <div className='flex gap-1 justify-center text-custom-yellow'>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                            </div>
                            <p className='w-[70%] mx-auto mt-8 text-justify'>Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper
                            </p>
                            <p className='font-bold pt-4'>Ama Ampomah</p>
                            <p>CEO & Founder Inc </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-[500px] h-[450px] flex flex-col justify-center text-center px-5'>
                        <div className='absolute top-[20px] right-[207px]'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNDVxEpMURzE8hoaskeclsmqNa6RCDrT3BA&usqp=CAU" alt="Pic" width="90" height="90" />
                        </div>
                        <div className='py-8 mt-10 border rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md'>
                            <div className='flex gap-1 justify-center text-custom-yellow'>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar className='text-gray-400' />
                            </div>
                            <p className='w-[70%] mx-auto mt-8 text-justify'>Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper
                            </p>
                            <p className='font-bold pt-4'>Ama Ampomah</p>
                            <p>CEO & Founder Inc </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-[500px] h-[450px] flex flex-col justify-center text-center px-5'>
                        <div className='absolute top-[20px] right-[207px]'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_twskgDtU7yNjHTFzHgS5g-ZqAWXO5bSHQ&usqp=CAU" alt="Pic" width="90" height="90" />
                        </div>
                        <div className='py-8 mt-10 border rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md'>
                            <div className='flex gap-1 justify-center text-custom-yellow'>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar className='text-gray-400' />
                            </div>
                            <p className='w-[70%] mx-auto mt-8 text-justify'>Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper
                            </p>
                            <p className='font-bold pt-4'>Ama Ampomah</p>
                            <p>CEO & Founder Inc </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-[500px] h-[450px] flex flex-col justify-center text-center px-5'>
                        <div className='absolute top-[20px] right-[207px]'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEbArbyoopYCN-cEZlOyn4WjUNWJZNMwAXg&usqp=CAU" alt="Pic" width="90" height="90" />
                        </div>
                        <div className='py-8 mt-10 border rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md'>
                            <div className='flex gap-1 justify-center text-custom-yellow'>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar className='text-gray-400' />
                            </div>
                            <p className='w-[70%] mx-auto mt-8 text-justify'>Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper
                            </p>
                            <p className='font-bold pt-4'>Ama Ampomah</p>
                            <p>CEO & Founder Inc </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Customers