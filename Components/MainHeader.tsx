import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';

function MainHeader() {
  return (
    <div className='bg-main-black w-full h-20 px-16 flex justify-between items-center'>
      <Link href='/'>
        <Image
          src='/images/shared/desktop/logo.svg'
          width={125}
          height={125}
          className='cursor-pointer'
          alt='logo'
        />
      </Link>
      <NavLinks />
      <Image
        src='/images/shared/desktop/icon-cart.svg'
        width={25}
        height={25}
        alt='cart'
      />
    </div>
  );
}

export default MainHeader;
