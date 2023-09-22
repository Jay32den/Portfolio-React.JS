import React, {useState} from 'react';
import ShoppingSite from '../assets/MattfbHome.png';
import GoogleClone from '../assets/GoogleHome.png';
import ToDoList from '../assets/To-Do-List.png';

const Work = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>
                    Work
                </p>
                <p className='py-6 text-2xl'>Demo and look through my projects
                <br/>
                More coming soon
                </p>
                </div>

            {/* container for projects */}
            <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-4">
            {/* The Work */}
                <div style={{backgroundImage : `url(${ShoppingSite})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover effect for images */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='text-2xl font-bold text-white tracking-wider'>

                        </span>
                        
                        <div className='pt-8 text-center'>
                        <p className='text-2xl font-bold'>
                    Miniature Skateboard Obstacles
                </p>
                <br/><br/>
                        <a href='https://skateboard-obsticle-website.vercel.app/'>
                        <button className="text-center rounded-lg px-6 py-5 m-3
                       bg-white text-gray-700 font-bold text-lg">Demo</button>
                               </a>
                            <a href='https://github.com/Jay32den/Skateboard-Obsticle-Website'>
                                <button className="text-center rounded-lg px-6 py-5 m-3
                       bg-white text-gray-700 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                
                <div style={{backgroundImage : `url(${GoogleClone})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/* Hover effect for images */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='text-2xl font-bold text-white tracking-wider'>

                        </span>
                        <div className='pt-8 text-center'>
                        <p className='text-2xl font-bold'>
                    Google Clone
                </p>
                <br/><br/>
                            <a href='https://google-clone-azure-tau.vercel.app/'>
                                <button className="text-center rounded-lg px-6 py-5 m-3
                       bg-white text-gray-700 font-bold text-lg">Demo</button>
                            </a>
                            <a href='https://github.com/Jay32den/Google-clone'>
                                <button className="text-center rounded-lg px-6 py-5 m-3
                       bg-white text-gray-700 font-bold text-lg">Code</button>
                            </a>
                            <button className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}> test</button>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Work