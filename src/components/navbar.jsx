import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Logo.png' ;
import { Link } from 'react-scroll';
import Resume from '../resumeFile/JaydenSiskResume.pdf';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  
  return (
    <div className="fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-50">
      <div className='hover:scale-110 duration-500'>
        <Link to="home" smooth={true} duration={500}>
        <img src={Logo} alt='Logo Image' style={{width: '132px'}}/>
        </Link>
      </div>


      {/*MENU*/}
      <div>
        <ul className='hidden md:flex'>
          <li>
            <Link to="home" smooth={true} duration={500} className='hover:bg-blue-600 hover:border-blue-600 rounded py-2 px-4 text-white '>
          Home
        </Link>
        </li>
        <li>
            <Link to="about" smooth={true} duration={500} className='hover:bg-blue-600 hover:border-blue-600 rounded py-2 px-4 text-white '>
          About
        </Link>
        </li>
        <li>
            <Link to="skills" smooth={true} duration={500} className='hover:bg-blue-600 hover:border-blue-600 rounded py-2 px-4 text-white '>
          Skills
        </Link>
        </li>
        <li>
            <Link to="work" smooth={true} duration={500} className='hover:bg-blue-600 hover:border-blue-600 rounded py-2 px-4 text-white '>
          Work
        </Link>
        </li>
        <li>
            <Link to="contact" smooth={true} duration={500} className='hover:bg-blue-600 hover:border-blue-600 rounded py-2 px-4 text-white '>
          Contact
        </Link>
        </li>
        </ul>
      </div>
      

        {/* HAMBURGER */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        

        
        
        {/* MOBILE MENU */}
            
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>            
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Work
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
            </Link>
          </li>
          <div className='flex fixed flex-col top-[5%] left-5'>
          <li className='md:hidden lg w-[60px] h-[55px] flex justify-center items-center ml-[-20px] bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/jayden-sisk-b1674a256/' >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className='md:hidden lg w-[60px] h-[55px] flex justify-center items-center ml-[-20px] bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Jay32den'>
                <FaGithub size={40} />
              </a>
            </li>
            <li className='md:hidden lg w-[60px] h-[55px] flex justify-between items-center ml-[-20px] bg-[#a700fa]'>
              <button onClick={() => { downloadFile (Resume)}} className='flex justify-between items-center w-full text-gray-300' href='/'>
                <BsFillPersonLinesFill size={40} />
              </button>
            </li>
            </div>
        </ul>



        {/* SOCIAL ICONS */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/jayden-sisk-b1674a256/' >
                Linkedin <FaLinkedin size={40} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Jay32den'>
                GitHub <FaGithub size={40} />
              </a>
            </li>
            {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00f2fa]'>
              <a className='flex justify-between items-center w-full text-white-300' href='/'>
                Email <HiOutlineMail size={40} />
              </a>
            </li> */}
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a700fa]'>
              <button onClick={() => { downloadFile (Resume)}} className='flex justify-between items-center w-full text-gray-300' href='/'>
                Resume <BsFillPersonLinesFill size={40} />
              </button>
            </li>
          </ul>
        </div>




    </div>
    )
}


export default Navbar