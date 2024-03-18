import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import carshowImg from '../../public/assets/projects/carshow-app.png'

const CarRental = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <div className='w-screen h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10'/>
            <Image 
                src={carshowImg}
                className='absolute z-1'
                layout='fill'
                objectFit='cover'
                alt='property'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Car Hub</h2>
                <h3>Next.js / Tailwind / RapidAPI </h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p className='pt-3 leading-7'>
                    Carhub is your one-stop solution for hassle-free car rentals, offering a seamless and intuitive browsing 
                    experience powered by cutting-edge technologies. Built with Next.js and styled with Tailwind CSS, Carhub 
                    combines sleek design with powerful functionality to provide you with the best car rental experience possible.
                    Browse through our extensive inventory of vehicles, ranging from compact cars to luxury SUVs, and find the perfect 
                    ride for your next adventure. With real-time data from the Car Show API by RapidAPI, you can trust that you&apos;re getting 
                    accurate information about each vehicle&apos;s make, model, features, and availability.
                </p>
                <Link href={'https://github.com/TariqKichawele/car-showcase'}>
                        <button className='px-8 py-2 mt-4 mr-8'>
                            Code
                        </button>
                </Link>
                <Link href={'https://car-showcase-alx5.vercel.app'}>
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
                            <RiRadioButtonFill className='pr-1' /> RapidAPI
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

export default CarRental