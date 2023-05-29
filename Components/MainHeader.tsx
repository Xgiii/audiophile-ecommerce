'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import { gallery } from '@/utils';
import GalleryItem from './GalleryItem';
import Cart from './Cart';
import { useAppSelector } from '@/store/hooks';

function MainHeader() {
  const [menu, setMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [cart, setCart] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cartQty = useAppSelector((state) => state.cart.totalQty);

  function closeMenuOnAnotherPageHandler() {
    setTimeout(() => setMenu(false), 100);
  }

  return (
    <>
      <div className='relative bg-main-black w-full h-20 px-6 md:px-16 lg:px-32 2xl:px-[20vw] flex justify-between items-center z-20'>
        <div
          className={`absolute ${
            menu ? 'top-20 opacity-100' : '-top-[1000px] opacity-0'
          } left-0 w-full bg-white flex flex-col sm:flex-row space-x-2 px-6 pb-6 justify-center z-20 transition-all duration-500 rounded-b-lg`}
        >
          {gallery.map((item) => (
            <GalleryItem
              onClick={closeMenuOnAnotherPageHandler}
              key={item.id}
              label={item.label}
              image={item.image}
            />
          ))}
        </div>

        <Image
          onClick={() => setMenu((prevValue) => !prevValue)}
          src={
            menu
              ? '/images/shared/tablet/icon-close-menu.svg'
              : '/images/shared/tablet/icon-hamburger.svg'
          }
          alt='menu icon'
          width={14}
          height={14}
          className='md:hidden cursor-pointer'
        />
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
        <div className='relative'>
          <Image
            src='/images/shared/desktop/icon-cart.svg'
            width={25}
            height={25}
            alt='cart'
            className='cursor-pointer '
            onClick={() => setCart((prevValue) => !prevValue)}
          />
          {cartQty > 0 && mounted && (
            <div className='absolute -top-3 -right-2 bg-orange rounded-full w-5 h-5 flex items-center justify-center text-white text-xs font-bold'>
              {cartQty}
            </div>
          )}
        </div>
      </div>
      {(menu || cart) && (
        <div
          onClick={() => (setMenu(false), setCart(false))}
          className='fixed inset-0 bg-main-black/50 animate-darken-bg transition-all z-10'
        ></div>
      )}
      {cart && (
        <div className='absolute z-30 top-20 right-6 md:right-16 lg:right-32 2xl:right-[20vw]'>
          <Cart />
        </div>
      )}
    </>
  );
}

export default MainHeader;
