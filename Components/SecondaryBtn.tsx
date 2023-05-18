import React from 'react'

function SecondaryBtn({
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
        'bg-black text-white py-3 px-7 uppercase hover:bg-black/80 text-sm font-semibold tracking-wider' +
        className
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default SecondaryBtn