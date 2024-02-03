import React from 'react'
import Image from "next/image";
import Footer_logo from "../public/images/webp/Footer_logo.webp";
import Instagram from "../public/images/webp/Instagram.webp"
import Facebook from "../public/images/webp/Facebook.webp"
import Telegram from "../public/images/webp/Telegram.webp"
import Twitter from "../public/images/webp/Twitter.webp"
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='bg-black'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='max-w-[1140px] mx-auto px-3'>
                    <div className='flex items-center justify-center flex-col'>
                        <div>
                            <Image className="sm:max-w-[271px] sm:h-[89.35px] max-w-[220px] h-[74px] cursor-pointer mt-8 sm:mt-10 md:mt-[51px]" src={Footer_logo} alt="logo"></Image>
                        </div>
                        <p className='font-inter text-base font-normal leading-6 text-white opacity-70 mt-[11px] sm:mt-4 text-center max-w-[462px] px-12'>See who showed up. View analytics, create tickets, and track who's supporting you the most.</p>

                        <div className='flex items-center gap-5 sm:gap-6 md:gap-7 lg:gap-8 mt-4 sm:mt-5 md:mt-6'>
                            <a href="#" className='text-white font-inter text-base font-normal leading-6 hover:text-[#fe720b] duration-300 transition-all'>Features</a>
                            <a href="#" className='text-white font-inter text-base font-normal leading-6 hover:text-[#fe720b] duration-300 transition-all'>FAQ</a>
                        </div>

                        <div className='flex items-center justify-center gap-5 mt-5 sm:mt-6 md:mt-7 lg:mt-8 mb-8'>
                            <a href="#"><Image className="max-w-[33.55px] sm:max-w-[38px] md:max-w-[43.08px] duration-300 hover:scale-[0.9]" src={Instagram} alt="Instagram logo"></Image></a>
                            <a href="#"><Image className="max-w-[33.55px] sm:max-w-[38px] md:max-w-[43.08px] duration-300 hover:scale-[0.9]" src={Facebook} alt="Facebook logo"></Image></a>
                            <a href="#"><Image className="max-w-[33.55px] sm:max-w-[38px] md:max-w-[43.08px] duration-300 hover:scale-[0.9]" src={Telegram} alt="Telegram logo"></Image></a>
                            <a href="#"><Image className="max-w-[33.55px] sm:max-w-[38px] md:max-w-[43.08px] duration-300 hover:scale-[0.9]" src={Twitter} alt="twitter logo"></Image></a>
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <div className='w-full h-[1px] bg-white opacity-30 absolute top-0'></div>
                    <p className='text-white font-inter font-normal text-base leading-6 opacity-40 py-2.5 sm:py-4 md:py-[19px] flex items-center justify-center text-center'>{currentYear} TixByAir. All Rights Reserved. </p>
                </div>

            </div>
        </div>
    )
}

export default Footer