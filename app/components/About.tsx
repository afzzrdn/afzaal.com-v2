import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div id="about" className="relative my-[100px] gap-10 md:gap-[80px] px-[40px] xl:px-[100px] w-full text-white overflow-hidden bg-transparent flex flex-col md:flex-row justify-center items-center">
      <div className='w-full md:w-[600px] flex flex-col'>
        <div className='flex  gap-5 items-center'>
          <h2 className="text-xl md:text-3xl font-bold roboto"><span className='text-[#3485ff] text-lg md:text-2xl'>01. </span>About Me</h2>
          <div className='w-[100px] md:w-[320px] h-[1px] bg-gray-400'></div>
        </div>
        <p className='md:w-[550px] pt-5 text-gray-400'>
          Hi, My Name is Afzaal. I am an informatics engineering student with interests in software development, web development, and mobile application development.
          <br /><br />
          Currently, I am exploring various projects related to modern web development, such as building applications using popular frameworks and optimizing user experiences. I am also interested in learning how mobile application development can create innovative solutions that are accessible to a wide audience.
          <br /><br />
          As a student, I believe that learning is a continuous process that drives innovation. Therefore, I always strive to expand my knowledge through research, team collaboration, and experimenting with the latest technologies.
          <br /><br />
          Here are a few technologies I’ve been working with recently:
        </p>
        <div className="grid grid-cols-2 gap-2 w-[400px] mt-5 text-[#3485ff]">
          <div className='flex roboto text-sm gap-3'>
            <FontAwesomeIcon icon={faPlay} className='w-[5px]'/>
            <p className='text-gray-400'>Javascript (ES6+)</p>
          </div>
          <div className='flex roboto text-sm gap-3'>
            <FontAwesomeIcon icon={faPlay} className='w-[5px]'/>
            <p className='text-gray-400'>TypeScript</p>
          </div>
          <div className='flex roboto text-sm gap-3'>
            <FontAwesomeIcon icon={faPlay} className='w-[5px]'/>
            <p className='text-gray-400'>React</p>
          </div>
          <div className='flex roboto text-sm gap-3'>
            <FontAwesomeIcon icon={faPlay} className='w-[5px]'/>
            <p className='text-gray-400'>Node.js</p>
          </div>
          <div className='flex roboto text-sm gap-3'>
            <FontAwesomeIcon icon={faPlay} className='w-[5px]'/>
            <p className='text-gray-400'>Tailwind</p>
          </div>
          <div className='flex roboto text-sm gap-3'>
            <FontAwesomeIcon icon={faPlay} className='w-[5px]'/>
            <p className='text-gray-400'>Laravel</p>
          </div>
        </div>
      </div>
      <div className="relative group w-[200px] h-[200px]">
        <Image
          src="/img/image-2.jpeg"
          alt="image"
          width={300}
          height={300}
          className="rounded-md relative sm:scale-125 transform transition duration-300 ease-in-out z-20 group-hover:-translate-x-1 group-hover:-translate-y-1 "
        />
        
        <div className="absolute top-[20px] left-[35px] transform w-[180px] h-[180px] sm:scale-125 border-[#3485ff] border-2 rounded-md transition duration-300 z-10 group-hover:translate-x-1 group-hover:translate-y-1"></div>
      </div>
    </div>
  )
}

export default About