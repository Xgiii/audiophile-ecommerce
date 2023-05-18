import React from 'react';

function SecondaryBtn({
  onClick,
  children,
  outline,
  disabled,
  className,
}: {
  onClick?: () => void;
  children: string;
  outline?: boolean;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      className={`${
        outline
          ? 'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all'
          : 'bg-black text-white border-0 hover:bg-black/80'
      }  py-3 px-7 self-auto md:self-start uppercase text-sm font-semibold tracking-wider ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default SecondaryBtn;
