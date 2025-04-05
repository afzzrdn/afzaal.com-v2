import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { faGithub, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Links = () => {
  return (
    <div className='w-full h-[100px] hidden xl:flex justify-center items-end px-[4rem] fixed bottom-0 z-[100]'>
        <div className='w-[1500px] justify-between flex items-end'>
            <div className='flex flex-col items-center gap-5 text-gray-400 left-[60px] absolute'>
                <div className='pl-1 flex flex-col gap-7'>
                  <a href="https://instagram.com/@rosselvert" target='_blank'>
                    <FontAwesomeIcon icon={faInstagram} width={18} className='hover:text-[#3485ff] hover:-translate-y-1 transition duration-300 cursor-pointer'/>
                  </a>
                  <a href="https://tiktok.com/@rosselvert" target='_blank'>
                    <FontAwesomeIcon icon={faTiktok} width={18} className='hover:text-[#3485ff] hover:-translate-y-1 transition duration-300 cursor-pointer'/>
                  </a>
                  <a href="https://github.com/afzzrdn" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} width={18} className='hover:text-[#3485ff] hover:-translate-y-1 transition duration-300 cursor-pointer'/>
                  </a>
                  <a href="mailto:mhmdafz78@gmail.com" target='_blank'>
                    <FontAwesomeIcon icon={faEnvelope} width={18} className='hover:text-[#3485ff] hover:-translate-y-1 transition duration-300 cursor-pointer'/>
                  </a>
                </div>
                <div className='h-[100px] w-[1px] bg-gray-400'></div>
            </div>
        </div>
    </div>
  )
}

export default Links