import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import blogappImg from '../../public/assets/projects/blogpic.png'

const FigmaClone = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <div className='w-screen h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10'/>
            <Image 
                src={blogappImg}
                className='absolute z-1'
                layout='fill'
                objectFit='cover'
                alt='property'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>DevInsights Digest</h2>
                <h3>React.js / Tailwind / MongoDB / Express.js</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p className='pt-3 leading-7'>
                    DevInsights Digest is a blog site application for curated articles, insights, 
                    and resources on all things development. Powered by the MERN (MongoDB, Express.js, React.js, 
                    Node.js) stack, DevInsights Digest offers a seamless browsing experience with advanced search and 
                    filter functionalities. Dive into a vast library of articles covering a wide range of topics 
                    including programming languages, web development, software engineering, and more.
                </p>
                <Link href={'https://github.com/TariqKichawele/mern-blog'}>
                        <button className='px-8 py-2 mt-4 mr-8'>
                            Code
                        </button>
                </Link>
                <Link href={'https://mern-blog-2i5s.onrender.com/'}>
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
                            <RiRadioButtonFill className='pr-1' /> React.js
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Tailwind
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> MongoDB
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Express.js
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

export default FigmaClone