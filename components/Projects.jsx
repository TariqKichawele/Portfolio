import React from 'react'
import ProjectItem from './ProjectItem'
import figmaCloneImg from '../public/assets/projects/figma-clone.png'
import realestateImg from '../public/assets/projects/real-estate-app.png'
import blogappImg from '../public/assets/projects/blogpic.png'
import carshowImg from '../public/assets/projects/carshow-app.png'
import pixelPerfectImg from '../public/assets/projects/pixel-perfect.png'
import eventlyImg from '../public/assets/projects/evently.png'

const Projects = () => {
  return (
    <div className='w-full' id='projects'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Projects
            </p>
            <h2 className='py-4'>What I Have Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                    title='Evently'
                    img={eventlyImg}
                    projectUrl={'/evently'}
                    tech='Next Js'
                />
                <ProjectItem 
                    title='Figma clone'
                    img={figmaCloneImg}
                    projectUrl='/figma-clone'
                    tech='Next.js'
                />
                <ProjectItem 
                    title='Property Pulse'
                    img={realestateImg}
                    projectUrl='/property-pulse'
                    tech='React Js'
                />
                <ProjectItem 
                    title='DevInsights Digest'
                    img={blogappImg}
                    projectUrl='/blog-app'
                    tech='React Js'
                />
                <ProjectItem 
                    title='Car Hub'
                    img={carshowImg}
                    projectUrl='/car-rental'
                    tech='Next Js'
                />
                <ProjectItem 
                    title='Pixel Perfect'
                    img={pixelPerfectImg}
                    projectUrl={'/pixel-perfect'}
                    tech='Next Js'
                />
            </div>
        </div>
    </div>
  )
}

export default Projects