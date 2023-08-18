import React, { useState } from 'react'

const Contact = () => {
    const [name,setName]=useState('');
    const [email,setEmail] = useState('');
    const [text,setText] = useState('');

    const handleName = (event)=>{
        setName(event.target.value);
    };
    const handleEmail = (event)=>{
        setEmail(event.target.value);
    };
    const handleText = (event)=>{
        setText(event.target.value);
    };
    const handleSubmit = ()=>{
        if(!name || !email||!text){
            setEmail('');
            setName('');
            setText('');
        }
    }

  return (
    <section name='contact' className='pt-20 w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500'>Contact</p>
                <p className='py-6'>Submit a response to get in touch we me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit} action='https://getform.io/f/4bd6c9fa-0406-474c-acd6-5cd7b8eca048' className=' flex flex-col w-full md:w-1/2 ' method='post'>
                    <input type='text'required minLength={5} name='name' placeholder='Enter your Name' value={name} onChange={handleName} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type='text' required maxLength={200} name='email'placeholder='Enter your Email' value={email} onChange={handleEmail} className='p-2 bg-transparent my-4 border-2 rounded-md text-white focus:outline-none'/>
                    <textarea type='text'  name='massage' required  rows={7} placeholder='Enter your Message' value={text} onChange={handleText} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110'>Let's connect</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact