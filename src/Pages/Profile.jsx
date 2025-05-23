import React from 'react'
import cam from '../assets/cam.svg'
import profile from '../assets/profile.png'
import { useSelector } from 'react-redux'
function Profile() {
    const userData = useSelector((state) => state.auth.userData);
    
    return (
        <div className='w-full min-h-screen bg-slate-300 text-black '>
                <h2 className='w-full text-lg font-semibold bg-white py-4 px-4 md:text-center '>
                    Account Setting
                </h2>
                <div className='w-full mt-8 px-4 flex gap-4  md:mx-auto md:max-w-lg'>
                    <div className='relative inline-block '>
                        <img className='w-18' src={profile} alt="prifile image" />
                        <img className='absolute bottom-0 right-0' src={cam} alt="prifile image" />
                    </div>

                    <div className='flex flex-col '>
                        <h3 className='text-md font-bold '>{userData && userData.name}</h3>
                        <p className='text-sm  '>{userData && userData.email}</p>
                    </div>
                </div>
                <p className='text-sm px-4 py-4 md:max-w-lg md:mx-auto'>
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>
                <hr className='border-dashed border-2 border-gray-400 my-2 md:max-w-lg md:mx-auto' />
        </div>
    )
}

export default Profile
