import Image from 'next/image'
import React from 'react'
import ContactImg from '../public/assets/contact.jpg'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Contact
            </p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image 
                                src={ContactImg}
                                className='rounded-xl hover:scale-105 ease-in duration-300'
                                alt='contact'
                            />
                        </div>
                        <div>
                            <h2 className='py-5'>Tariq Kichawele</h2>
                            <p>Full-Stack Developer</p>
                            <p className='py-4'>
                                I am available for freelance or full-time positions. Contact
                                me and let&apos;s talk.
                            </p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center justify-between py-4'>
                                <Link href={'/linkedin.com'}>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                </Link>
                                <Link href={'/github.com'}>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                </Link>
                                <Link href={'/linkedin.com'}>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                                <Link href={'/resume'}>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form 
                            action='https://getform.io/f/lbjnkkgb'
                            method='POST'
                            encType='multipart/form-data'
                        >
                            <div className='grid md:grid-cols-2 gap-4 w-full'>
                                <div className='flex flex-col'>
                                    <label className='uppercasetext-sm py-2'>Name</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='text'
                                        name='name'
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='text'
                                        name='phone'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input 
                                    className='border-2 rounded-lg p-3 flex border-gray-300'
                                    type='email'
                                    name='email'
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input 
                                    className='border-2 rounded-lg p-3 flex border-gray-300'
                                    type='text'
                                    name='subject'
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea
                                    className='border-2 rounded-lg p-3 border-gray-300'
                                    rows='10'
                                    name='message'
                                ></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4' type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href={'/'}>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp 
                            className='text-[#5651e5]'
                            size={30}
                        />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact