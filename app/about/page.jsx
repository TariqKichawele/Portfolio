import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProfileImg from '../../public/assets/projects/about-me.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-5 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                    About
                </p>
                <h2 className='py-4'>
                    Who I Am
                </h2>
                <p className='py-2 text-gray-600'>
                    I specialize in fullstack developement whether it be for designing, developing, and maintaining both the front-end and back-end components of web applications. 
                    Leveraging my expertise in a wide range of technologies including HTML, CSS, JavaScript, and various frameworks/libraries 
                    for the front-end, as well as Node.js, Express.js, and databases such as MongoDB or SQL for the back-end, I can collaborate with 
                    cross-functional teams to deliver robust and scalable solutions. From conceptualizing user interfaces and implementing responsive 
                    designs to architecting server-side logic and managing database operations, I can play a pivotal role in the end-to-end development process. 
                    With a focus on delivering high-quality code, optimizing performance, and ensuring seamless user experiences, I thrive in dynamic environments 
                    where innovation and collaboration drive success.
                </p>

                <p className='py-2 text-gray-600'>
                    I started web developement in 2013 managing multiple e-commerce
                    websites on CMS platforms such as WordPress, BigCommerce, and
                    Shopify. I have experience working directly with clients and taking
                    mock wireframes all the way to deployed applications. In my spare
                    time I run Code Commerce, a Youtube channel where I teach web
                    developement and various front-end technologies.
                </p>
                <Link href='/#projects'>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>
                        Check out my latest projects
                    </p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image 
                    src={ProfileImg}
                    className='rounded-xl'
                    alt='About'
                />
            </div>
        </div>
    </div>
  )
}

export default About