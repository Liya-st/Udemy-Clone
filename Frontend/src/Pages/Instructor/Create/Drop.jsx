import React, { useState } from 'react';
import list from '../list.json';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className='relative' onMouseEnter={handleMouseEnter} >
        <div className='bg-white-400 p-4 flex flex-row text-md'>
          <div className='hover:text-[#A435F0]'>
           Choose a category
          </div>
        </div>
        {isOpen && (
          <div className='bg-white pl-0 absolute top-full left-0 mt-[15px] ml-[0px] flex flex-col p-2 w-[300px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
            {list.map((item, i) => (
              <div key={i}  >
                <h3 >{item.course}</h3>
              </div>
            ))}
          </div>
        )}
      </button>
    </>
  );
};