import React from 'react'
import {HiArrowRight} from "react-icons/hi";
const Card = ({title,des,icon}) => {
  return (
    <div className='w-ful px-12 h-95 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
    hover:from-black hover:to-[#1e2024] transition-colors duration-100 group'>
      <div className='h-70 overflow-y-hidden'>
        <div className='flex h-full flex-col gap-8 translate-y-10 group-hover:translate-y-0 transition-tranform duration-500'>
        <div>
        <span className='text-5xl text-designColor'>{icon}</span>
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='text-2x1 font-titleFont font-bold text-gray-300'>{title}</h2>
      <p className='base'>{des}</p>
      <span className='text-2x1 text-designColor'>
        <HiArrowRight />
      </span>

        </div>
        </div>
     </div>



    </div>
  );
}

export default Card