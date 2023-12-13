import React from 'react'
import Title from '../features/layouts/Title'
import {network_tapology} from '../../assets';
import  {wireless_Security} from '../../assets';
import  {cloud_computing}  from '../../assets';
import ProjectsCard from './ProjectsCard';
const Projects = () => {
  return (
    <section 
        id = 'projects'
        className='w-full py-20 border-b-[1px] border-b-black'
    >
    <div className='flex justify-center items-center text-center'>
        <Title 
         title= "Projects"
         des="My Projects Reports"
     />
          
    </div>
    <div className='grid grid-cols-3 gap-14'>
      <a href='https://docs.google.com/document/d/1yg9saYrsFXrQuDsYfLzeNj8mRZML4XdXAekxb1t6Sfk/edit?usp=sharing' target='_blank'>
        <ProjectsCard 
        title= "Secure Network Topology"
        des = "Build a Secure Network Topolgy using pfsense to self-host a website"
        src={network_tapology}
        
        />
        </a>
        <a href='https://docs.google.com/document/d/1ji-oI-2lRo28DaN76Q_xD0ku7e2aO0_8Lxlua8E-vKY/edit?usp=sharing' target='_blank'>
        <ProjectsCard 
        title= "Wireless Security"
        des = "Implent cyber attacks such as man-in-middle"
        src= {wireless_Security}
        />
        </a>
        <a href='https://docs.google.com/document/d/1I1PGQFopakvBR7UaU5tWJtd9bXZyptd8ujLPqKEhe50/edit?usp=sharing' target='_blank'>
        <ProjectsCard 
        title="Cloud Computing"
        des = "Show my experties using the cloud"
        src={cloud_computing}
        />
        </a>
    </div>
    </section>
  )
}

export default Projects