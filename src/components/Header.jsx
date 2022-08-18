import React from 'react'
import { IoMdNotifications } from 'react-icons/io';
import { AiTwotoneAppstore } from 'react-icons/ai';
import profile from "../assets/profile_p.jpg"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const {posts} = useSelector(state => state.posts)
  const navigate = useNavigate()
  return (
    <header className='bg-white container shadow-md m-auto mt-8 p-5 flex justify-between items-center'>
      <h1 className='text-3xl font-bold'>Arbit Blog</h1>
      <nav className='flex gap-4 items-center'>
        <h3 
        className='text-2xl font-semibold relative cursor-pointer'
        onClick={()=> navigate('/')}
        >
          Posts
          <span className='absolute rounded-full bg-teal-200 text-base left-11 bottom-6 w-5 h-5 flex justify-center items-center'>{posts.length}</span>
          </h3>
        <IoMdNotifications size={25} className='cursor-pointer'/>
        <AiTwotoneAppstore size={25} className='cursor-pointer'/>
        <img className='rounded-full  cursor-pointer w-10 h-10' src={profile} alt="profile" />
      </nav>
    </header>
  )
}

export default Header