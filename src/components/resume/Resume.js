import React, { useState } from 'react'

import Title from '../features/layouts/Title'
import Education from './Education';
import Skills from './Skills';

const Resume = () => {

    const[educationData,setEducationData] = useState(true);
    const[skillData,setSkillData] = useState(false);
  return (
    <section 
    id = 'resume'
    className='w-full py-20 border-b-[1px] border-b-black'
>
<div className='flex justify-center items-center text-center'>
    <Title 
     title= "Bachelor Degree in Information technology Specialize in network & System Security"
     des="My Resume"
 />
      
</div>
<div>
    <ul className='w-full grid grid-cols-2'>
        <li onClick={()=>setEducationData(true) & setSkillData(false)} className='resumeli' >
            Education</li>
        <li onClick={()=>setEducationData(false) & setSkillData(true)} className='resumeli'>Professional Skills</li>
     

    </ul>
</div>
{
    educationData && <Education />
    
}
{skillData && <Skills />}
    </section>
  );
}

export default Resume