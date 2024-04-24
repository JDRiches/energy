import React from 'react'

import { FaLinkedin } from "react-icons/fa";
import { ImGit, ImGithub } from "react-icons/im";


function Footer() {
  return (
    <div className='flex flex-row h-10 w-full gap-5 items-center justify-center'>


        <div className='flex flex-row gap-2 hover:underline'>
            <FaLinkedin size={25}/> <a href='https://www.linkedin.com/in/jack-riches/'>jack-riches</a>
        </div>

        
        <div className='flex flex-row gap-2 hover:underline'>
            <ImGithub size={25}/> <a href='https://github.com/JDRiches'>@JDRiches</a>
        </div>
        
    </div>
  )
}

export default Footer
