import React from 'react'
import Avatar2 from '../Assets/Avatar2.png'
import Avatar1 from '../Assets/Avatar1.png'

const About = () => {
  return (
    <section name='about' className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white '>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col md:flex-row justify-between w-full h-full '>
        <div className='md:w-2/3 pb-8 md:pb-0'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600 mb-4 '>About</p>
            <p className='mt-10 md:mt-8 text-justify group'>
                Greetings! I'm Jeremiah Alonso Eromosele, a frontend developer. I hold a Master's in Financial Economics from the University of Abuja and a BSc in Economics (Upper Second Class) from Madonna University. With certifications as a Google Data Analyst and Meta Frontend Developer, I blend analytical insights with technical frontend skills.

                My journey began with a fascination for the virtual world, leading me to excel in HTML, CSS, and JavaScript. I'm committed to staying updated with the latest trends, infusing innovation into every project.

                Collaboration is key to my process. By partnering with designers, analysts, and clients, I strive to exceed expectations and deliver exceptional results.

                When not coding, I explore design techniques and delve into user experience intricacies. This drive to learn ensures I create frontend solutions that meet evolving digital needs.

                Explore my portfolio to witness my frontend and analytical expertise. If you're seeking a collaborator who combines technical proficiency with analytical thinking, let's connect. Together, we'll craft impactful web experiences and innovative solutions.
            </p>
        </div>
        <div className='md:w-1/3 mt-10 md:mt-0 md:ml-6'>
            <div className='group w-80 relative  mt-[20%] mr-auto ml-auto hidden md:block'>
                <img className='opacity-0 absolute group-hover:opacity-100 duration-500' src={Avatar1} alt='avatar2'/>
                <img className='group-hover:opacity-0 duration-500' src={Avatar2} alt='avatar2'/>
            </div>
        </div>
    </div>
</section>

  )
}

export default About