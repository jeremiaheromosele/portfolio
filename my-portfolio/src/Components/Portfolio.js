import React from 'react'
import foodapp from '../Assets/foodapp.jpg'
import portfolio from '../Assets/portfolio.jpg'
import reactapp from '../Assets/reactapp.jpg'
import basicland from '../Assets/basicland.jpg'


const Portfolio = () => {
    const openInNewTab = url =>{
        window.open(url, '_blank','noopener,noreferrer');
    };
    const project =[
        {
            id:1,
            src:foodapp,
            code: 'https://github.com/jeremiaheromosele/Meta',
        },
        {
            id:1,
            src:portfolio,
            code: 'https://github.com/jeremiaheromosele/portfolio',
        },{
            id:1,
            src:reactapp,
            code: 'https://github.com/jeremiaheromosele/Meta-capstone-project',
        },{
            id:1,
            src:basicland,
            code: 'https://github.com/jeremiaheromosele/React-project',
        },
    ]
  return (
    <section name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-20'>
    <div className=' p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600 '>Portfolio</p>
            <p className='py-6'>Check out some of my projects</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 sm:px-0 '>
            {project.map(({ id, src,code }) => (
                <div key={id} className='w-60 mx-auto shadow-md shadow-gray-600 rounded-lg hover:shadow-yellow-500'>
                    <img src={src} alt='project 1' className='rounded-md duration-200 h-40 w-full object-fill hover:scale-105' />
                    <div className='flex items-center justify-center'>
                        <button onClick={()=> openInNewTab(code)} className='w-1/2 px-0 py-2 m-2 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>



  )
}

export default Portfolio