'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import NavLogo from '../public/assets/tk-logo.png';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Navbar = () => {
    const [ linkColor, setLinkColor ] = useState('#1f2937');
    const [ shadow, setShadow ] = useState(false);
    const [ nav, setNav ] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

  return (
    <div 
        className={'fixed w-full h-20 shadow-xl z-50 ease-in-out duration-300 bg-[#ecf0f3]'}
    >
        <div className='flex justify-between items-center w-full h-full px-10 2xl:px-16'>
            <Link href={'/'}>
                <Image 
                    src={NavLogo}
                    width={150}
                    height={60}
                    alt='Tariq Logo'
                    className='cursor-pointer'
                />
            </Link>

            <div>
                <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className='ml-10 text-sm uppercase hover:border-b'>
                        <Link href={'/about'}>About</Link>
                    </li>
                    <li className='ml-10 text-sm uppercase hover:border-b'>
                        <Link href={'/projects'}>Projects</Link>
                    </li>
                    <li className='ml-10 text-sm uppercase hover:border-b'>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                    <li className='ml-10 text-sm uppercase hover:border-b'>
                        <Link href='/#skills'>Skills</Link>
                    </li>
                    <li className='ml-10 text-sm uppercase hover:border-b'>
                        <Link href='/resume'>Resume</Link>
                    </li>
                </ul>

                <div
                    className='md:hidden'
                    onClick={handleNav}
                    style={{ color: `${linkColor}` }}
                >
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>

        <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div 
                className={ 
                    nav 
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-1 ease-in duration-500'
                }
            >
               {
                nav && (
                    <div>
                        <div className='flex w-full items-center justify-between md:hidden'>
                            <Link href={'/'}>
                                <Image 
                                    src={NavLogo}
                                    width={87}
                                    height={35}
                                    alt='Tariq Logo'
                                    className='cursor-pointer'
                                />
                            </Link>
                            <div
                                onClick={handleNav}
                                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                            >
                                <AiOutlineClose />
                            </div>
                        </div>

                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>
                                Lets build something great together. Contact me and lets get started.
                            </p>
                        </div>
                    </div>
                )
               }

                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href={'/'}>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                Home
                            </li>
                        </Link>
                        <Link href={'/about'}>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                About
                            </li>
                        </Link>
                        <Link href={'/projects'}>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                Projects
                            </li>
                        </Link>
                        <Link href={'/contact'}>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                Contact
                            </li>
                        </Link>
                        <Link href='/#skills'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                Skills
                            </li>
                        </Link>
                        <Link href='/resume'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                Resume
                            </li>
                        </Link>
                    </ul>
                    <div className='pt-8'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>
                            Lets connect
                        </p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <Link href={'/linkedin.com'}>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                            </Link>
                            <Link href={'/github.com'}>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                            </Link>
                            <Link href='/#contact'>
                                <div
                                    onClick={() => setNav(!nav)}
                                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                >
                                    <AiOutlineMail />
                                </div>
                            </Link>
                            <Link href='/resume'>
                                <div
                                    onClick={() => setNav(!nav)}
                                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                >
                                    <BsFillPersonLinesFill />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar