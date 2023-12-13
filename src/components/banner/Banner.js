import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import{FaFacebookF,FaFacebookMessenger} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"
import { me_on_island } from '../../assets/index';
import { FaSquareGithub } from "react-icons/fa6";

const Banner = () => {
  const [text] = useTypewriter({
    words:["KPU Student.","IT Professional."],
    loop: true,
    typeSpeed:20,
    deleteSpeed:20,
    delaySpeed:2000,
  });
  return (
    <section id="home"className="w-full py-10 pb-20 flex items-center border-b-[1px] font-titleFont border-b-black">
        
     <div className='w-1/2 flex flex-col gap-20'>
      <div>
      <div className='flex flex-col gap-5 fixed-text-content'>
        <h4 className='text-lg font-normal moved-heading'>WELCOME TO MY SITE</h4>
        <h1 className='text-6xl font-bold text-white'>Hi, I'm {" "}
        <span className='text-designColor capitalize'>Nael Ayach</span>
        </h1>
        <h2 className='text-3xl font-bold text-white'> <span>{text}</span>
        <Cursor
          cursorBlinking="false"
          cursorStyle="|"
          cursorColor='#ff014f'
          />
        </h2>
        </div>
      </div>
      <div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-5  ">FIND ME IN</h2>
        <div className='flex gap-4'>
          <a href='https://www.facebook.com/nael.ayyash1/' target='_blank'>
          <span className='bannerIcon'>
            <FaFacebookF />
          </span>
          </a>
          <a href='https://www.facebook.com/messages/t/100000908424878' target='_blank'>
          <span className='bannerIcon'>
            <FaFacebookMessenger />
          </span>
          </a>
          <a href='https://www.linkedin.com/in/nael-ayach-a25a312a4/' target='_blank'>
          <span className='bannerIcon'>
            <BsLinkedin />
          </span>
          </a>
          <a href='https://github.com/' target='_blank'> 
          <span className='bannerIcon'>
            <FaSquareGithub />
          </span>
          </a>
          </div>
        </div>
      </div>
     </div>
     <div className='w-1/2 flex justify-center items-center relative' >
      <img className='w-[500px] h-[680px] z-10' src={me_on_island} alt='BannerIMG' />
      </div> 
      <div>
        
      </div>
      </section>
  )
}

export default Banner