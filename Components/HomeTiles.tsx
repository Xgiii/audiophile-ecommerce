import Image from 'next/image';
import React from 'react';
import SecondaryBtn from './SecondaryBtn';
import Link from 'next/link';

function HomeTiles() {
  return (
    <section className='px-6 md:px-16 lg:px-32 2xl:px-[20vw] flex flex-col space-y-16 mt-16'>
      <div className="flex flex-col items-center text-center md:text-left pt-16 pb-4 md:pt-0 md:flex-row lg:items-end px-12 lg:px-16 xl:px-24 2xl:px-32 bg-orange w-full min-h-[35rem] rounded-md bg-[url('/images/home/desktop/pattern-circles.svg')] bg-contain md:bg-cover bg-no-repeat md:bg-[-16vw_-12vw]">
        <Image
          src='/images/home/desktop/image-speaker-zx9.png'
          alt='speaker image'
          width={380}
          height={380}
          className='rounded-md w-44 md:w-72 lg:w-[350px] pb-6'
        />
        <div className='flex flex-col space-y-6 self-center px-4 sm:px-8 xl:pl-32'>
          <h2 className='text-white text-center md:text-left font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-widest uppercase'>
            zx9 speaker
          </h2>
          <p className='text-light-gray/40 text-sm sm:text-base'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href='/speakers/zx9-speaker'>
            <SecondaryBtn>see product</SecondaryBtn>
          </Link>
        </div>
      </div>
      <div className='relative'>
        <Image
          src='/images/home/desktop/image-speaker-zx7.jpg'
          alt='speaker image'
          width={1920}
          height={1080}
          className='rounded-md hidden md:block'
        />
        <Image
          src='/images/home/tablet/image-speaker-zx7.jpg'
          alt='speaker image'
          width={1920}
          height={1080}
          className='rounded-md hidden sm:block md:hidden'
        />
        <Image
          src='/images/home/mobile/image-speaker-zx7.jpg'
          alt='speaker image'
          width={1920}
          height={1080}
          className='rounded-md sm:hidden'
        />
        <div className='absolute top-1/2 left-[10%] -translate-y-1/2 space-y-3'>
          <h2 className='text-3xl font-semibold uppercase mb-3'>zx7 speakers</h2>
          <Link href='/speakers/zx7-speaker'>
            <SecondaryBtn outline>see product</SecondaryBtn>
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <Image
          src='/images/home/desktop/image-earphones-yx1.jpg'
          alt='earphones image'
          width={1920}
          height={1080}
          className='rounded-md'
        />
        <div className='py-16 text-center md:text-left md:py-0 flex flex-col px-[15%] justify-center space-y-3 bg-light-gray w-full h-full rounded-md'>
          <h2 className='text-3xl font-semibold uppercase'>yx1 earphones</h2>
          <Link href='/earphones/yx1-earphones'>
            <SecondaryBtn outline>see product</SecondaryBtn>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeTiles;
