'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
})

const Hero = () => {
  return (
    <div className='pl-[40px] md:pl-[350px] xl:pl-[250px] px-[20px] items-start justify-center flex flex-col z-20 h-[550px] w-full md:w-[1500px]'>
      <div className='flex flex-col justify-center items-start gap-3 text-white'>
        <p className='roboto text-[#3485ff] text-lg ml-1'>Hi, my name is</p>
        <h1 className='text-white/90 text-4xl sm:text-6xl font-bold'>Muhammad Afzaal.</h1>
        <div className='text-xs sm:text-xl'>
          <p className='text-gray-300 roboto ml-1 mt-2'>These are the jobs I do :</p>
          <div className='flex flex-col md:flex-row mt-2 md:mt-0'>
            <p className='text-gray-300 roboto ml-1'>Fullstack Developer</p>
            <p className='text-gray-300 roboto ml-1 hidden md:block'>|</p>
            <p className='text-gray-300 roboto ml-1'>Mobile Developer</p>
            <p className='text-gray-300 roboto ml-1 hidden md:block'>|</p>
            <p className='text-gray-300 roboto ml-1'>Software Engineer</p>
          </div>
        </div>
        <button className='border-[1px] rounded-md hover:scale-105 transition duration-300 ease-in-out border-[#3485ff] py-3 px-10 mt-3 text-sm text-[#3485ff]'>Download CV</button>
      </div>
    </div>
  )
}

export default Hero
