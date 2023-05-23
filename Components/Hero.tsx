import React from 'react';
import MainBtn from './MainBtn';
import HorizontalLine from './HorizontalLine';
import Link from 'next/link';

function Hero() {
  return (
    <>
      <div className="relative bg-main-black flex items-center text-center lg:text-left h-[650px] px-6 md:px-16 lg:px-32 2xl:px-[20vw] bg-[url('/images/home/mobile/image-hero.jpg')] sm:bg-[url('/images/home/tablet/image-hero.jpg')] lg:bg-[url('/images/home/desktop/image-hero.jpg')] bg-contain xl:bg-contain lg:bg-cover bg-no-repeat bg-[center_top_-3rem] xl:bg-[center_top_-5rem]">
        <HorizontalLine />
        <div className='w-full lg:w-[40%]'>
          <h2 className='uppercase text-light-black tracking-[0.4rem]'>
            New Product
          </h2>
          <h1 className='text-white text-4xl sm:text-5xl xl:text-6xl font-semibold tracking-wide leading-[1.1] mt-2'>
            XX99 MARK II HEADPHONES
          </h1>
          <p className='text-light-black mb-12 mt-4'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href='/headphones/xx99-mark-two-headphones'>
            <MainBtn>See Product</MainBtn>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
