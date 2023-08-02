import React from 'react'

const Contact = () => {
    return (
      <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
          <form method='POST' action="https://getform.io/f/64336d70-62a5-44d8-a0b6-6196ff6e0c56" className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-yellow-600 text-gray-300'>Contact</p>
                  <p className='text-gray-300 text-lg py-4'>Submit the form below or shoot me an email - siskjayden09@gmail.com</p>
              </div>
              <input className='bg-[#dce0ed] p-2' type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-[#dce0ed]' type="email" placeholder='Email' name='email' />
              <textarea className='bg-[#dce0ed] p-2' name="message" rows="10" placeholder='Message'></textarea>
              <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-900 px-4 py-3 my-8 mx-auto flex items-center'>Let's Work</button>
          </form>
      </div>
    )
  }

export default Contact