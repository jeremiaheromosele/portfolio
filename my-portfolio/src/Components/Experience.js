import React from 'react'
import html5 from '../Assets/html5.png'
import canvas from '../Assets/canvas.png'
import css from '../Assets/css.png'
import javascript from '../Assets/javascript.png'
import tailwind from '../Assets/tailwind.png'
import logo512 from '../Assets/logo512.png'

const Experience = () => {
  const techs=[
    {
      id:1,
      src:html5,
      title:'HTML',
      style: 'shadow-orange-500'

    },
    {
      id:2,
      src:canvas,
      title:'CANVAS',
      style: 'shadow-yellow-300'

    },
    {
      id:3,
      src:css,
      title:'CSS',
      style: 'shadow-blue-200'

    },
    {
      id:4,
      src:javascript,
      title:'JAVASCRIPT',
      style: 'shadow-yellow-300'

    },
    {
      id:5,
      src:tailwind,
      title:'TAILWIND',
      style: 'shadow-sky-400'

    },
    {
      id:6,
      src:logo512,
      title:'REACT',
      style: 'shadow-blue-600'

    },
  ]
  return (
    <section name='experience'className='pt-20 pb-20 bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl inline border-b-4 font-bold border-yellow-500 p-2'>
            Experience
          </p>
          <p className='py-6'>
            This are the software I'm familiar with
          </p>
        </div>
        <div className='w-full  grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4 px-12 sm:px-0'>
          {techs.map(({id,src,title,style})=>(
             <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
             <img src={src} alt="HTML" className='w-20 mx-auto' />
             <p className='mt-4'>{title}</p>
           </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Experience