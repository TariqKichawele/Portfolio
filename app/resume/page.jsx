import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Tariq Kichawele</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/tariq-kichawele/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/TariqKichawele'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
                Freelance FullStack Developer
            </span>
            <span className='px-2'>|</span>
          </p>
          <p className='py-1 italic'>FullStack Development (February 2023 - May 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
                Initiated the end-to-end development of a cutting-edge real estate application leveraging the 
                MERN (MongoDB, Express.js, React.js, Node.js) stack, enabling seamless property search, 
                listing management, and user engagement.
            </li>
            <li>
                Designed and implemented intuitive UI, optimizing UX and increasing user engagement by over 50% 
                within the first six months of deployment.
            </li>
            <li>
                Integrated third-party APIs for payment processing (Stripe) and shipping leading to a 15% increase in 
                completed transactions and revenue, while also implementing RESTful APIs to facilitate communication 
                between the front and backend components
            </li>
            <li>
                Collaborated closely with client to gather requirements, provide regular updates, and deliver tailored solutions 
                within agreed timelines and budget constraints.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              AI SAAS
            </span>
          </p>
          <p className='py-1 italic'>Pixel Perfect (November 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
                PixelPerfect is an innovative AI image generator SAAS that has generated over 16 users, 
                leveraging cutting-edge technologies to empower customers to create stunning and personalized 
                images effortlessly. Built with TypeScript, Next.js, MongoDB, Cloudinary AI, and Stripe
            </li>
            <li>
                It harnesses the power of Cloudinary AI algorithms to analyze user input and generate visually captivating images with precision and accuracy.
                It employs Stripe for secure and reliable payment processing, allowing customers to seamlessly subscribe to premium features and services.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Carolina Refugee Resettlement Agency</span>
            <span className='px-2'>|</span>Charlotte, NC
          </p>
          <p className='py-1 italic'>Case Management Supervisor (August 2020 - January 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
                Assisted incoming refugees to register their children for school, 
                obtain Social Security Number (SSN) and signing them up for classes 
                for English as a Second Language (ESL)
            </li>
            <li>
                Helped keep a numbered list every week to keep an inventory of the 
                donations and neatly arrange them in the designated area until the items 
                are needed by families.     
            </li>
            <li>
                Helped organize and clean apartment set-ups for the first 90 day resettling period for incoming refugees/asylees
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;