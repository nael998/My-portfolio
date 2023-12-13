import React from 'react'
import ResumeCard from './ResumeCard';
import {motion} from 'framer-motion';
const Skills = () => {
  return (
    <div className='w-full flex gap-20'>
    <div className='w-1/2'>
    <div className='py-12 font-titleFont flex flex-col gap-4'>
        <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
        <h2 className='text-4xl font-bold'>Networking & Securty </h2>
    </div>
    <div className='className="mt-14 w-full flex flex-col gap-6'>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Web Security</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span

            initial={{x: "-88%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration: 0.5, delay:0.5}}
          
          
          className='w-[88%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>88%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Information Security</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span

            initial={{x: "-86%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration: 0.5, delay:0.5}}
          
          
          className='w-[86%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>86%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Network Security</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span

            initial={{x: "-89%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration: 0.5, delay:0.5}}
          
          
          className='w-[89%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>89%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Cloud Security</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span

            initial={{x: "-83%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration: 0.5, delay:0.5}}
          
          
          className='w-[83%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>83%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Security Architectrure</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span

            initial={{x: "-80%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration: 0.5, delay:0.5}}
          
          
          className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>80%</span>
          </motion.span>
        </span>
      </div>
    </div>
    </div>












    <div className='w-1/2'>
    <div className='py-12 font-titleFont flex flex-col gap-4'>
        <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
        <h2 className='text-4xl font-bold'>Programing</h2>
    </div>
    <div className='className="mt-14 w-full flex flex-col gap-6'>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>C++</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span

            initial={{x: "-82%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration: 0.5, delay:0.5}}
          
          
          className='w-[82%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>82%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Front-end development</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span

            initial={{x: "-88%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration: 0.5, delay:0.5}}
          
          
          className='w-[88%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>88%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Python</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span

            initial={{x: "-90%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration: 0.5, delay:0.5}}
          
          
          className='w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>95%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>JavaScript</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span

            initial={{x: "-86%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration: 0.5, delay:0.5}}
          
          
          className='w-[86%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>86%</span>
          </motion.span>
        </span>
      </div>
      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Java</p>
        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
          <motion.span

            initial={{x: "-87%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration: 0.5, delay:0.5}}
          
          
          className='w-[87%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
            <span className='absolute -top-7 right-0'>87%</span>
          </motion.span>
        </span>
      </div>












      

      
    </div>
    </div>
    </div>
  )
}

export default Skills