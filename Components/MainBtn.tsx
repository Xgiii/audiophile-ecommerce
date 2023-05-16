import React from 'react';

function MainBtn({
  onClick,
  children,
  disabled,
  className,
}: {
  onClick?: () => void;
  children: string;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      className={
        'bg-orange text-white py-3 px-7 uppercase hover:bg-opacity-80 text-sm font-semibold tracking-wider' +
        className
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default MainBtn;
