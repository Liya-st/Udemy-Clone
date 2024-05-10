import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { responsiveFontSizes } from '@mui/material';
export default function Nav() {
  return (
    <>
    <div className='flex justify-around mt-5'>
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" 
        alt="Udemy logo" 
        className='object-contain w-20 h-9 cursor-pointer m-2'
        />
              <p className="font-sans text-base font-normal text-gray-800 mt-3">Categories</p>
              <SearchIcon className=' text-gray-500 absolute left-[280px] top-9' />

         <input
        type="text"
        placeholder="Search for anything "
        className="outline-none border-black border rounded-3xl w-[45%] h-[3rem] text-base pl-12 mt-1 bg-slate-100"
        // value={searchInput}
        // onChange={(e) => setSearchInput(e.target.value)}
        // onKeyPress={handleEnter}
      />
         <p className="font-sans text-base font-normal text-gray-800 mt-3">Udemy Business</p>
         <ShoppingCartOutlinedIcon className="hover:text-[#5624d0] hover:cursor-pointer mt-3" style={{fontSize: '32px'}} />
       <div className='flex gap-2'>
       <button  className="border border-black w-24 h-12  hover:bg-gray-200">
            <p className="font-sans font-bold text-gray-800 text-base">Log in</p>
          </button>
          <button  className="border border-black w-24 h-12 hover:bg-gray-700 bg-gray-800">
            <p className="font-sans font-bold text-white text-base">Sign Up</p>
          </button>
          <button  className="border border-black w-12 h-12 mr-10 hover:bg-gray-200">
            <LanguageOutlinedIcon/>
          </button>
       </div>


    </div>
    </>
  )
}
