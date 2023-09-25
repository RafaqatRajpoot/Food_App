import { MdFastfood } from 'react-icons/md';
import { IoLogoInstagram } from 'react-icons/io';
import { FiTwitter } from 'react-icons/fi';
import { BiLogoFacebook } from 'react-icons/bi';
const Footer = () => {
    return (
        <div id='contact' className="w-full h-[55vh]">
            <div className=' flex justify-center gap-24 w-[80%] mx-auto'>
                <div className="flex flex-col gap-5 w-[30%] px-6 ">
                    <div className="flex gap-3">
                        <MdFastfood className="text-custom-orange w-[50px] h-[50px]" />
                        <p className="text-4xl font-extarbold">resturant</p>
                    </div>

                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .Learn more</p>
                    <p className="font-semibold">OPENING HOURS</p>

                    <div className='flex gap-8'>
                        <div>
                            <p>Monday - Friday</p>
                            <p>8:00 am to 9:00 pm</p>
                        </div>
                        <div>
                            <p>Saturday</p>
                            <p> 8:00 am to 9:00 pm</p>
                        </div><div>
                            <p>Sunday</p>
                            <p>CLOSED</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <p className="font-semibold">Navigation</p>
                    <p>Menu</p>
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>Main dishes</p>
                </div>
                <div className='flex flex-col gap-8'>
                    <p className="font-semibold">DISHES</p>
                    <p>Fish & Viggies</p>
                    <p>Tofu Chili</p>
                    <p>Egg & Cocumber</p>
                    <p>Lumpia w/Suace</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className="font-semibold">Follow us</p>
                    <div className='flex gap-4'>
                        <BiLogoFacebook className="w-[40px] h-[40px] border-2 border-black rounded-full p-2 cursor-pointer" />
                        <IoLogoInstagram className="w-[40px] h-[40px] border-2 border-black rounded-full p-2 cursor-pointer" />
                        <FiTwitter className="w-[40px] h-[40px] border-2 border-black rounded-full p-2 cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="h-[2px] w-[60%] mx-auto mt-8 bg-black bg-opacity-25"></div>
            <div className='w-[70%] flex px-10 mx-auto justify-between mt-4'>
                <div>
                    <p>2022 Restaurants. All Right Reserved. Designed by Isaac</p>
                </div>
                <div className='flex gap-4'>
                    <p>Terms of Service</p>
                    <p> Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
