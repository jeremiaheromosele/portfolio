import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsPersonBadge} from 'react-icons/bs'

const Sociallinks = () => {
const links = [
    {
        id:1,
        child:(
            <>
            linkedIn<FaLinkedin size={25}/>
            </>
        ),
        href:'https://linkedin.com',
        style:' bg-blue-950 duration-500 rounded-tr-md'
    },    {
        id:2,
        child:(
            <>
            Github<FaGithub size={25}/>
            </>
        ),
        href:'https://github.com/jeremiaheromosele',
        style:' bg-gradient-to-r from-gray-200 to black-400',
    },    {
        id:3,
        child:(
            <>
            Mail<HiOutlineMail size={25}/>
            </>
        ),
        href:'mailto:alonsoeromsosele@gmail.com',
        style:' bg-gradient-to-r from-green-300 via-blue-200 to-yellow-400',
    },    {
        id:4,
        child:(
            <>
            Resume<BsPersonBadge size={25}/>
            </>
        ),
        href:'/JERRY.docx',
        download:true,
        style:'rounded-br-md  duration-500'

    }
]
  return (
    <section className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id,child,href,download,style})=>(
                <li key={id} className={`flex justify-between items-center w-40 h-10 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 ${style}`}>
                <a href={href} className='flex justify-between item-center w-full text-white' download={download} target='_blank' rel='noreferrer'>
                   {child}
                    </a>
            </li>
            ))}
        </ul>

    </section>
  )
}

export default Sociallinks