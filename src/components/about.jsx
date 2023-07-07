import React from 'react'

const About = () => {
    return (
      <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
                About
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>I'm Jayden Sisk, nice to meet you. Please take a look around.</p>
              </div>
              <div>
                <p>My goal is to develop a dynamic and interactive web
application by utilizing the power of Node.js, JavaScript, HTML,
CSS, and SQL. This goal encompasses the use of these
technologies to create a robust and efficient application that
meets the needs of users and delivers a seamless user
experience. My passion is in troubleshooting, debugging, and
analyzing website issues, and I am known for my ability to
provide innovative ideas and best practices.</p>  
              </div>
            </div>
        </div>
      </div>
    );
  };

export default About