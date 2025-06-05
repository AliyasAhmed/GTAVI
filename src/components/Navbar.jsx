import React from 'react';

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 z-[10] navbar w-full py-10 px-10 ">
      <div className="logo flex gap-7 cursor-pointer">
        <div className="lines flex flex-col gap-[.3rem]">
          <div className="line w-10 h-1 bg-white"></div>
          <div className="line w-8 h-1 bg-white"></div>
          <div className="line w-5 h-1 bg-white"></div>
        </div>
        <h3 className='text-[1.5rem] -mt-[.5rem] leading-none text-white'>Rockstar</h3>
      </div>
    </div>
  );
}