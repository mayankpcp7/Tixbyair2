import Image from 'next/image'
import React from 'react'
import ScanerImage from "../public/images/webp/Scaner_img.webp"
import waveImg from "../public/images/png/horizontal_wave_animated.svg"
import side_vector_img from "../public/images/png/side_vector_animated.svg"
import Accordion from '../components/Accordion';

const items = [
    {
        id: "1",
        title: 'Is TixByAir free?',
        content: 'Yes, TixByAir is 100% free and provides each community with unlimited QRs, links, and member analytics.',
    },
    {
        id: "2",
        title: 'Who can use TixByAir?',
        content: 'Yes, TixByAir is 100% free and provides each community with unlimited QRs, links, and member analytics.',
    },
    {
        id: "3",
        title: 'What does TixByAir do?',
        content: 'Yes, TixByAir is 100% free and provides each community with unlimited QRs, links, and member analytics.',
    },
    {
        id: "4",
        title: 'How does TixByAir help my community?',
        content: 'Yes, TixByAir is 100% free and provides each community with unlimited QRs, links, and member analytics.',
    },
    {
        id: "5",
        title: 'How do I get started?',
        content: 'Yes, TixByAir is 100% free and provides each community with unlimited QRs, links, and member analytics.',
    },
    {
        id: "6",
        title: 'Can I make multiple communities?',
        content: 'Yes, TixByAir is 100% free and provides each community with unlimited QRs, links, and member analytics.',
    },
];


const FaqSec = () => {
    return (
        <div className='max-w-[1440px] mx-auto overflow-hidden relative'>
            <Image className='max-w-[221px] h-[63px] absolute end-0 top-5 md:block hidden' src={side_vector_img}></Image>
            <Image className='max-w-[221px] h-[63px] absolute start-0 bottom-[16%] md:block hidden' src={side_vector_img}></Image>
            <div className='max-w-[1140px] mx-auto px-6 sm:px-5 md:px-3 relative z-10'>
                <div className='flex items-center justify-center text-center flex-col'>
                    <h2 className='font-satoshi font-black text-3xl sm:text-[32px] md:text-4xl lg:text-5xl leading-[38px] sm:leading-normal md:leading-normal lg:leading-[64.5px] mb-2.5 sm:mb-3 md:mb-4'>Frequently Asked Questions</h2>
                    <p className='font-inter font-normal text-base leading-6 text-black opacity-70 max-w-[787px] px-3'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. </p>
                </div>

                <div className='mt-9 sm:mt-10 md:mt-12 lg:mt-16 mb-[88px] lg:mb-[92px]'>
                    <div className='flex items-center justify-center flex-wrap'>

                        <div className="lg:w-7/12">
                            <div>
                                <Accordion items={items} defaultOpenIndex={0} />
                            </div>

                        </div>
                        <div className="lg:w-5/12 mt-11 lg:mt-0">
                            <div className='relative'>
                                <Image className='max-w-[476px] max-h-[461px] w-full' src={ScanerImage}></Image>
                                <Image className='max-w-[221px] h-[63px] absolute end-[-18.5%] top-[25.5%] horizontal_wave' src={waveImg}></Image>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FaqSec