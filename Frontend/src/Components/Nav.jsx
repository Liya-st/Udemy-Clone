import React, { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { NavLink } from '@mantine/core';
import { Dropdown } from './Dropdown';
import list from '../list.json';

export default function Nav() {
  const navigate = useNavigate();
  const [showTeaching, setShowTeaching] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);

  const handleLogin = () => {
    navigate('/Pages/Login');
  };
   const handleSignup = () => {
    navigate('/Pages/Signup');
  };
  const handleCourse  =() =>{
    navigate('/Pages/Instructor/Courses')
  }
  const handleHome = () => {
    navigate('/');
  };

  const handleCart = () => {
    navigate('/Components/Cart');
  };

  const handleTeaching = () => {
    setShowTeaching(!showTeaching);
    setShowBusiness(false);
  };
  const handleCourse  =() =>{
    navigate('/Pages/Instructor/Courses')
  }
  const handleBusiness= () => {
    setShowBusiness(!showBusiness);
    setShowTeaching(false);
  };

  return (
    <>
      <div className='flex items-center justify-around mt-2 h-20'>
        <img
          src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
          alt='Udemy logo'
          className='object-contain w-20 h-9 cursor-pointer ml-5'
          onClick={handleHome}
        />

        <Dropdown />

        <div className='relative flex items-center'>
          <input
            type='text'
            placeholder='Search for anything'
            className='outline-none border-black border rounded-3xl w-[600px] h-12 text-base pl-12 bg-slate-100'
          />
          <SearchIcon className='text-gray-500 absolute left-3' style={{ fontSize: '32px' }} />
        </div>
        <button className='relative'>
          <div className='flex gap-5'>
            <p
              className='font-sans text-base text-[#2D2F31] hover:text-[#A435F0]'
              onMouseEnter={handleTeaching}
              onMouseLeave={handleTeaching}
            >
              Udemy Business
            </p>
            <p
              className='font-sans text-base text-[#2D2F31] hover:text-[#A435F0]'
              onMouseEnter={handleTeaching}
              onMouseLeave={handleTeaching}
               onClick={handleCourse}

              Teach on Udemy
            </p>
            <p className='font-sans text-base text-[#2D2F31] hover:text-[#A435F0]'>My Learning</p>
          </div>
        </button>
        {showTeaching && (
          <div className='absolute top-[58px] left-1100 bg-white w-[200px] h-[200px] p-4  shadow-lg'>
            <p className='text-[#2D2F31] font-size-[16px] pb-2 font-bold  break-words'>
              Turn what you know into an opportunity and reach millions around the world.
            </p>
            <button className='bg-[#2D2F31] text-white font-bold py-2 px-4 rounded'onClick={handleCourse}>
              Learn More
            </button>
          </div>
        )}
        {showBusiness && (
          <div className='absolute top-[58px] left-1100 bg-white w-[200px] h-[200px] p-4  break-words  shadow-lg'>
            <p className='text-[#2D2F31] font-size-[16px] pb-2 font-bold' >
              Get your team access to over 25,000 top Udemy courses, anytime, anywhere.
            </p>
            <button className='bg-[#2D2F31] text-white font-bold py-2 px-4 rounded' >
              Try Udemy Business
            </button>
          </div>
        )}

        <ShoppingCartOutlinedIcon
          className='hover:text-[#5624d0] hover:cursor-pointer'
          onClick={handleCart}
          style={{ fontSize: '32px' }}
        />
        <div className='flex gap-2'>
          <button className='border border-black w-24 h-12 hover:bg-gray-200'>
            <p className='font-sans font-bold text-gray-800 text-base' onClick={handleLogin}>
              Log in
            </p>
          </button>
          <button className='border border-black w-24 h-12 hover:bg-gray-700 bg-gray-800'>
            <p className='font-sans font-bold text-white text-base' onClick={handleSignup}>Sign Up</p>
          </button>
        </div>
      </div>
      <div className='h-[1px] bg-gray-300'></div>
      <div className='flex items-center justify-around mt-2 h-10 shadow-md'>
        {list.map((item, i) => (
          <div key={i} className='text-[#2D2F31]'>
            <button>
              <h2>{item.course}</h2>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}