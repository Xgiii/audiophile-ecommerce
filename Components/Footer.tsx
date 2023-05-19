import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';

function Footer() {
  return (
    <footer className='relative bg-main-black px-6 md:px-16 lg:px-32 2xl:px-[20vw]'>
      <nav className='flex flex-col md:flex-row md:justify-between md:items-center pt-20 pb-10 space-y-4 md:space-y-0'>
        <Link href='/'>
          <Image
            src='/images/shared/desktop/logo.svg'
            width={125}
            height={125}
            className='cursor-pointer'
            alt='logo'
          />
        </Link>
        <NavLinks footer />
      </nav>
      <p className='text-light-black pb-10 text-sm md:text-base'>
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we&apos;re open 7 days a week.
      </p>
      <div className='flex justify-between items-center text-sm md:text-base pb-10'>
        <p className='text-light-black'>Copyright 2023. All Rights Reserved</p>
        <div className='flex items-center space-x-4'>
          <Image
            src='/images/shared/desktop/icon-facebook.svg'
            alt='facebook icon'
            width={24}
            height={20}
            className='cursor-pointer'
          />
          <Image
            src='/images/shared/desktop/icon-twitter.svg'
            alt='twitter icon'
            width={24}
            height={20}
            className='cursor-pointer'
          />
          <Image
            src='/images/shared/desktop/icon-instagram.svg'
            alt='instagram icon'
            width={24}
            height={20}
            className='cursor-pointer'
          />
        </div>
      </div>
      <div className='absolute top-0 left-6 md:left-16 lg:left-32 2xl:left-[20vw] w-32 h-1 bg-orange' />
    </footer>
  );
}

export default Footer;
