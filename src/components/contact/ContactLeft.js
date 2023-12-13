import React from 'react'
import { contactIMG } from '../../assets'
import{FaFacebookF,FaFacebookMessenger} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"

const ContactLeft = () => {
  return (
    <div className='w-[35%] h-full bg-gradient-to-r from-[#le2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
    <img
    className='w-full h-64 object-cover rounded-lg mb-4'
    src={contactIMG} alt='contactImg'></img>
    <div className='flex flex-col gap-2'>
        <h3 className='text-3xl font-bold text-white'>Nael Ayach</h3>
        <p className='text-lg font-normal text-gray-400'>
            IT professional
        </p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
            Phone: <span className='text-lightText'>778-999-3459</span>

        </p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
            Email:{""} <span className='text-lightText'>nael.ayach@student.kpu.ca</span>

        </p>
    </div>
    <div className='flex flex-col gap-4'>
        <h2 className='text-base uppercase font-titleFont mb-4'> Find me </h2>
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
        </div>
    </div>
</div>
  )
}

export default ContactLeft