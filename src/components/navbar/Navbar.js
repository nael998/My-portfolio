import React from 'react'
import { me_in_my_car } from "../../assets/index"
import {navlinksdata} from "../../constants";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='w-full h-20 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] borde-b-gray-600'>
        <div className='w-full h-20 mx-auto flex justify-between items-center'>
            <img src={me_in_my_car} alt='meInMyCar' className='logo-image max-w-screen auto mx-auto ' />
        </div>
        <div>
            <ul className='flex items-center gap-10 max-w-screen 2xl mx-auto px-16'>
                {
                    navlinksdata.map(({_id,title,link})=>(
                        <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300' key={_id}>
                            <Link 
                            activeClass='active'
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            
                            >{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
        
  }
export default Navbar

