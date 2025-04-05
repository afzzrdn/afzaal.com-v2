import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='relative h-full py-[150px] overflow-hidden bg-transparent flex flex-col items-center justify-center text-white'>
        <div className='flex items-center gap-5'>
            <div className='w-[50px] sm:w-[120px] md:w-[300px] h-[1px] bg-gray-400'></div>
            <h2 className="text-xl md:text-3xl font-bold roboto"><span className='text-[#3485ff] text-lg md:text-2xl'>04. </span>Contact Me</h2>
            <div className='w-[50px] sm:w-[120px] md:w-[300px] h-[1px] bg-gray-400'></div>
        </div>

        <div className='flex flex-col mt-5 items-center justify-center'>
            <h1 className='font-bold text-3xl md:text-5xl'>Get In Touch</h1>
            <p className='w-[300px] md:w-[500px] mt-5 text-center text-xs md:text-lg'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <a
                href="mailto:mhmdafz78@gmail.com?subject=Hi, Afzaal%20&body=Hi%20Afzaal,%20I%20want%20to%20discuss%20..."
                className=" text-[#3485ff] roboto py-4 hover:scale-110 transition duration-300 ease-in-out px-6 mt-10 rounded-md text-center border-[2px] border-[#3485ff]"
            >
                Send Email
            </a>
        </div>
    </div>
  )
}

export default Contact