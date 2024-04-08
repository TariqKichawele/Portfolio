import Image from 'next/image'
import React from 'react'
import Html from '../public/assets/skills/html.png'
import Css from '../public/assets/skills/css.png'
import JavaScript from '../public/assets/skills/javascript.png'
import ReactImg from '../public/assets/skills/react-2.png'
import Tailwind from '../public/assets/skills/tailwind.png'
import Firebase from '../public/assets/skills/firebase.png'
import Github from '../public/assets/skills/github1.png'
import NextJs from '../public/assets/skills/nextjs.png'
import MongoDB from '../public/assets/skills/mongo-2.png'
import Nodejs from '../public/assets/skills/node.png'
import TypeScript from '../public/assets/skills/typescript.svg.png';
import MySQL from '../public/assets/skills/mysql.jpg'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Skills
            </p>
            <h2 className='py-4'>What I can do</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={Html}
                                width={64}
                                height={64}
                                alt='html'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={Css}
                                width={64}
                                height={64}
                                alt=''
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={JavaScript}
                                width={64}
                                height={64}
                                alt=''
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={ReactImg}
                                width={64}
                                height={64}
                                alt=''
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={Tailwind}
                                width={64}
                                height={64}
                                alt=''
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={Firebase}
                                width={64}
                                height={64}
                                alt=''
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={Github}
                                width={64}
                                height={64}
                                alt=''
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={NextJs}
                                width={64}
                                height={64}
                                alt=''
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NextJs</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={MongoDB}
                                width={64}
                                height={64}
                                alt=''
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={Nodejs}
                                width={64}
                                height={64}
                                alt=''
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node.Js</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={TypeScript}
                                width={64}
                                height={64}
                                alt=''
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TypeScript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={MySQL}
                                width={84}
                                height={84}
                                alt=''
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MySQL</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills