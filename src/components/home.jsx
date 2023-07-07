import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          JAYDEN SISK
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Software Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        My goal is to develop a dynamic and interactive web
application by utilizing the power of Node.js, JavaScript, HTML,
CSS, and SQL. This goal encompasses the use of these
technologies to create a robust and efficient application that
meets the needs of users and delivers a seamless user
experience. My passion is in troubleshooting, debugging, and
analyzing website issues, and I am known for my ability to
provide innovative ideas and best practices.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Home
