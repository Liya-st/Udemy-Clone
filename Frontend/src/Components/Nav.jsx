import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
export default function Nav() {

  return (
    <div className='flex items-center justify-around mt-2'>
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" 
        alt="Udemy logo" 
        className='object-contain w-20 h-9 cursor-pointer ml-5'
        />
      <p className="font-sans text-base  text-gray-800">Categories</p>
      <div className="relative flex items-center">
            <input type="text" placeholder="Search for anything" className="outline-none border-black border rounded-3xl w-[600px] h-12 text-base pl-12 bg-slate-100" />
            <SearchIcon className="text-gray-500 absolute left-3" style={{ fontSize: '32px' }} />
      </div>
      <div className='flex gap-5'>
          <p className="font-sans text-base  text-gray-800 ">Udemy Business</p>
          <p className="font-sans text-base  text-gray-800 ">Teach on Udemy</p>
      </div>
         <ShoppingCartOutlinedIcon className="hover:text-[#5624d0] hover:cursor-pointer" style={{fontSize: '32px'}} />
       <div className='flex gap-2'>
       <button  className="border border-black w-24 h-12  hover:bg-gray-200">
            <p className="font-sans font-bold text-gray-800 text-base">Log in</p>
          </button>
          <button  className="border border-black w-24 h-12 hover:bg-gray-700 bg-gray-800">
            <p className="font-sans font-bold text-white text-base">Sign Up</p>
          </button>
          <button  className="border border-black w-12 h-12 mr-8 hover:bg-gray-200">
            <LanguageOutlinedIcon/>
          </button>
       </div>


    </div>
  )
}
