import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import pixelPerfectImg from '../../public/assets/projects/pixel-perfect.png'

const PixelPerfect = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <div className='w-screen h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10'/>
            <Image 
                src={pixelPerfectImg}
                className='absolute z-1'
                layout='fill'
                objectFit='cover'
                alt='property'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Pixel Perfect</h2>
                <h3>Next.js / Tailwind / Cloudinary AI / MongoDB</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p className='pt-3 leading-7'>
                    PixelPerfect is an innovative AI image generator SAAS that leverages cutting-edge technologies to empower 
                    users to create stunning and personalized images effortlessly. Built with TypeScript, Next.js, MongoDB, 
                    Cloudinary AI, and Stripe, PixelPerfect offers a seamless and intuitive platform for generating high-quality 
                    images tailored to user preferences. PixelPerfect harnesses the power of AI algorithms to analyze user input 
                    and generate visually captivating images with precision and accuracy. With a sleek and intuitive interface, 
                    PixelPerfect provides users with an easy-to-navigate platform to create custom images without any technical expertise required.
                </p>
                <Link href={'https://github.com/TariqKichawele/ai-images'}>
                        <button className='px-8 py-2 mt-4 mr-8'>
                            Code
                        </button>
                </Link>
                <Link href={'https://ai-images-seven.vercel.app'}>
                        <button className='px-8 py-2 mt-4'>
                            Demo
                        </button>
                </Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Next.js
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Tailwind
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Cloudinary AI
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> MongoDB
                        </p>
                    </div>
                </div>
            </div>
            <Link href={'/#projects'}>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>
    </div>
  )
}

export default PixelPerfect