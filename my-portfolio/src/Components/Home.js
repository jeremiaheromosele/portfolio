import React from 'react'
import Avatar40 from '../Assets/Avatar40.png'
import {PiArrowRight} from 'react-icons/pi'
import Avatar34 from '../Assets/Avatar34.png'


const Home = () => {
  return (
    <section name='home' className='h-full  w-full bg-gradient-to-b from-black via-black to-gray-800  md:pb-20'>
      <div className='max-w-screen-lg mx-auto flex items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center'>
          <div className='group mr-auto ml-auto relative mt-20 '><img className=' hidden md:block absolute items-center rounded-full h-52 w-52 group-hover:opacity-0 duration-500  ' src={Avatar40} alt='my avatar'/><img className='md:opacity-0 items-center rounded-full h-52 w-52 group-hover:opacity-100  duration-500' src={Avatar34} alt='my avatar'/></div>
          <h2 className='text-4xl text-white sm:text-4xl font-meduim font-signature tracking-widest m-auto py-3'>
            I'm a Frontend Developer
          </h2>
          <p className='text-justify text-white py-3'>Welcome to my portfolio! I'm a passionate frontend developer dedicated to crafting immersive and user-centric web experiences. With a keen eye for design and a knack for turning ideas into interactive realities, I specialize in creating responsive and visually appealing websites that leave a lasting impact. From clean code to captivating animations, I strive to blend creativity with functionality to deliver seamless digital solutions. Explore my projects and let's collaborate to bring your web visions to life!</p>
          <div className='mb-20 items-center justify-center m-auto  md:hidden'>
            <a href='/JERRY.docx' download={true} className='group text-white w-fit px-6 py-3 my-2 flex items-center  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Download Resume <span className='group-hover:rotate-90 duration-500'><PiArrowRight size={25} className='ml-1'/></span>
            </a>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Home