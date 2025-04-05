import { projectData } from '@/utils/Project'
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Project = () => {
  return (
    <div id="project" className='relative h-full py-[100px] mx-[20px] overflow-hidden bg-transparent flex flex-col items-center justify-center text-white'>
        <div className='flex items-center gap-5'>
            <div className='w-[50px] sm:w-[120px] md:w-[300px] h-[1px] bg-gray-400'></div>
            <h2 className="text-xl md:text-3xl font-bold roboto"><span className='text-[#3485ff] text-lg md:text-2xl'>02. </span>My Project</h2>
            <div className='w-[50px] sm:w-[120px] md:w-[300px] h-[1px] bg-gray-400'></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-5 px-[5px]">
        {projectData.map((project) => (
            <div
                key={project.id}
                className="w-[330px] h-[330px] hover:-translate-y-2 transition duration-300 ease-in-out flex flex-col justify-between rounded-md p-7 bg-[#161616fb] select-none group"
            >
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between">
                    <FontAwesomeIcon
                        icon={faFolder}
                        className="w-[25px] text-[#3485ff]"
                    />
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                        icon={faShareFromSquare}
                        className="w-[20px] text-gray-400"
                        />
                    </a>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-300 group-hover:text-[#3485ff]">{project.title}</h1>
                        <p className="text-gray-400 text-md mt-2">{project.description}</p>
                    </div>
                </div>
                <div className="list-none flex gap-5 text-gray-400 roboto text-xs">
                    {project.techStack.map((tech, index) => (
                    <p key={index}>{tech}</p>
                    ))}
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Project