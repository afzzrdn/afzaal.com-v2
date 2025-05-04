'use client'
import Link from 'next/link';
import React from 'react'


const Hero = () => {
  return (
    <div className='pl-[40px] md:pl-[350px] xl:pl-[250px] px-[20px] items-start justify-center flex flex-col z-20 h-[550px] w-full md:w-[1500px]'>
      <div className='flex flex-col justify-center items-start gap-3 text-white'>
        <p className='roboto text-[#3485ff] text-lg ml-1'>Hi, my name is</p>
        <h1 className='text-white/90 text-4xl sm:text-6xl font-bold'>Muhammad Afzaal.</h1>
        <div className='text-xs sm:text-xl'>
          <p className='text-gray-300 roboto ml-1 mt-2'>These are the jobs I do :</p>
          <div className='flex flex-col md:flex-row mt-2 md:mt-0'>
            <p className='text-gray-300 roboto ml-1'>Web Development</p>
            <p className='text-gray-300 roboto ml-1 hidden md:block'>|</p>
            <p className='text-gray-300 roboto ml-1'>Software Development</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
