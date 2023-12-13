import React from 'react'
import ResumeCard from './ResumeCard'
const Education = () => {
  return (
    <div className='w-full flex gap-20'>
    <div>
    <div className='py-12 font-titleFont'>
        <p className='text-sm text-designColor tracking-[4px]'>2019 - 2024</p>
        <h2 className='text-4xl font-bold'>KPU</h2>
    </div>
    <div className='className="mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
        <ResumeCard
        title="Bachelor Degree in IT"
        subTitle="kwantlen polytechnic university (2019-2024)"
        des="Surrey BC Canada"/>
        
        <ResumeCard 
        title="CCNA Certificate"
        subTitle= "2022"
        des="An information technology certificate from Cisco Systems."/>
        
        
    </div>
    </div>
    <div>
    <div className='py-12 font-titleFont'>
        <p className='text-sm text-designColor tracking-[4px]'>2019 - 2024</p>
        <h2 className='text-4xl font-bold'>Job Experience</h2>
    </div>
    <div className='className="mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
        <ResumeCard
        title="Smart Home Security Technician"
        subTitle="2023-"
        des="Install home Security systems including indoor/outdoor cameras,door/window sensors"/>
        
        <ResumeCard 
        title="System Analyst"
        subTitle= "2021 - 2022"
        des="Worked as part of the IT team for BCGSC"/>
        
        
    </div>
    </div>
    </div>
    
  )
}

export default Education