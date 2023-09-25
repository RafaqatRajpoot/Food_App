import { IoLogoInstagram } from 'react-icons/io';
import { FiTwitter } from 'react-icons/fi';
import { BiLogoFacebook } from 'react-icons/bi';

const LandingPage = () => {
    return (
        <div id='home' className='w-full h-[90vh] mt-0 flex justify-center items-center'>
            <div className='flex flex-col w-[35%]'>
                <p className='font-bold text-6xl'>
                    We provide the
                    best food for you
                </p>
                <p className='mt-16 w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='flex gap-6 mt-10'>
                    <button className="px-8 py-4 w-fit text-white text-lg bg-black rounded-br-2xl rounded-tl-2xl hover:bg-opacity-75">
                        Menu
                    </button>
                    <button className="px-8 py-4 w-fit text-white text-lg bg-custom-orange rounded-br-xl rounded-tl-xl hover:bg-custom-light-orange">
                        Book a table
                    </button>
                </div>
                <div className='flex mt-20 gap-4'>
                    <BiLogoFacebook className="w-[40px] h-[40px] border-2 border-black rounded-full p-2 cursor-pointer" />
                    <IoLogoInstagram className="w-[40px] h-[40px] border-2 border-black rounded-full p-2 cursor-pointer" />
                    <FiTwitter className="w-[40px] h-[40px] border-2 border-black rounded-full p-2 cursor-pointer" />
                </div>
            </div>
            <div className='relative'>
                <img src='/Mask-group.png' alt='Background Image' width="450" height="450" />
                <img className='absolute bottom-0 left-[-100px]' src='/dish.png' alt='Dish' width={300} height={300} />
            </div>
        </div>
    )
}

export default LandingPage
