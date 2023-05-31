'use client';

import React, { useState } from 'react';

function Checkbox({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`w-full py-4 px-4 cursor-pointer transition-all duration-300
       outline outline-2 rounded-md flex space-x-4 items-center ${
         active ? 'outline-orange' : 'outline-gray-300'
       }`}
    >
      <div
        className={`w-4 h-4 rounded-full border flex justify-center items-center ${
          active ? 'border-orange' : 'border-light-black'
        } `}
      >
        <div
          className={`${
            active ? 'w-2 h-2' : 'w-0 h-0'
          }  rounded-full bg-orange transition-all duration-200`}
        />
      </div>
      <h2 className='text-sm font-semibold'>{label}</h2>
    </div>
  );
}

export default Checkbox;
