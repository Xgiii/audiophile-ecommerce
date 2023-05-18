import Image from 'next/image';
import React from 'react';
import MainBtn from './MainBtn';
import SecondaryBtn from './SecondaryBtn';

function HomeTiles() {
  return (
    <section className='px-6 md:px-16 lg:px-32 2xl:px-[20vw] flex flex-col space-y-12 mt-24'>
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
          <SecondaryBtn>see product</SecondaryBtn>
        </div>
      </div>
    </section>
  );
}

export default HomeTiles;
