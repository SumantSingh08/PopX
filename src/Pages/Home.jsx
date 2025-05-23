import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
    return (
        <div className=' w-full min-h-screen px-3 bg-slate-300 md:p-24 '>
            <div className=' flex flex-col  fixed bottom-6  md:relative '>
                <div>
                    <span className='text-2xl md:text-8xl font-semibold'>W</span>
                    <span className='text-2xl md:text-5xl font-semibold'>elcome to </span>
                    <h2 className='inline-block text-2xl md:block  md:text-9xl font-semibold md:text-center'>PopX</h2>
                </div>
                <p className='max-w-sm text-sm text-gray-500  mx-auto mt-1 md:mt-7 md:text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta soluta commodi fugiat officiis necessitatibus.</p>
                <div className='w-full flex flex-col  gap-2 mt-6 text-center  items-center md:flex-col  md:justify-center md:items-center  md:gap-5  md:mt-10'>
                    <Button onClick={() => navigate("/signup")} className='w-full  mr-3  md:max-w-sm text-sm md:text-md font-semibold bg-violet-600 text-white rounded-sm cursor-pointer hover:bg-violet-700'>
                        Create Account
                    </Button>
                    <Button onClick={() =>navigate("/login")} className='w-full mr-3 md:max-w-sm  text-sm md:text-md font-semibold bg-purple-400 text-black rounded-sm cursor-pointer hover:bg-purple-400'>
                        Already Register? Login
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Home
