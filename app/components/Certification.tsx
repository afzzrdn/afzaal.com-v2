import { certifications } from '@/utils/Certification';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Certification = () => {
  return (
    <div
      id="certification"
      className="relative h-full pt-[80px] overflow-hidden bg-transparent flex flex-col text-white"
    >
      {/* Header Section */}
      <div className="flex items-center justify-center md:justify-end gap-5 md:pl-[350px]">
        <div className="w-[50px] md:w-[300px] h-[1px] bg-gray-400"></div>
        <h2 className="text-xl md:text-3xl font-bold roboto"><span className='text-[#3485ff] text-lg md:text-2xl'>03. </span>Certification</h2>
      </div>
      <div className='flex md:justify-between justify-center items-center md:items-start flex-col md:flex-row'>
        <p className='w-[300px] text-xl mt-10 text-gray-400'>
          Certification is real proof of my journey to continue learning, developing and giving my best. Here are some achievements that show my dedication in this field
          <br /><br />
          This certification is a document recognizing my skills and knowledge based on the training and exams I have taken. However, the skills and experience I have to offer are not limited to just this certification. Every project I work on is tailored to the specific needs of the client or company.
        </p>
        {/* Certification List */}
        <div className="flex flex-col justify-center md:items-end mt-10 px-[20px]">
          {certifications.map((cert) => (
          <div key={cert.id} className="flex gap-2 md:gap-5 mb-5">
              {/* Certification Info */}
              <div className="w-[280px] md:w-[500px] md:h-[70px] flex justify-between items-center p-5 bg-[#161616fb] rounded-md">
                <h1 className="font-bold text-gray-300">{cert.title}</h1>
                <p className="text-gray-400 roboto hidden md:block text-sm">{cert.organizer}</p>
              </div>

              {/* Action Button */}
              <a href={cert.file} target='_blank' className=' hover:-translate-y-2 transition duration-300 ease-in-out w-[70px] h-[70px] bg-[#161616fb] rounded-md flex justify-center items-center cursor-pointer'>
                  <FontAwesomeIcon
                      icon={faFile}
                      className="w-[20px] text-[#3485ff]"
                      title="Download Certificate"
                  />
              </a>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
