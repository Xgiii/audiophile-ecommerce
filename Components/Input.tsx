import React from 'react';

function Input({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div className='flex flex-col space-y-2'>
      <label className='text-sm font-semibold'>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className='placeholder:text-light-black focus:outline-orange transition-all duration-300 outline outline-2 outline-gray-200 px-4 py-3 rounded-md'
      />
    </div>
  );
}

export default Input;
