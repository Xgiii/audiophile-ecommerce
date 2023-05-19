import Image from 'next/image';
import React from 'react';

function GeneralDescription() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-16 lg:px-32 2xl:px-[20vw] mt-16 mb-16'>
      <div className='flex flex-col justify-center space-y-6'>
        <Image
          src='/images/shared/tablet/image-best-gear.jpg'
          alt='best gear image'
          width={1920}
          height={1080}
          className='rounded-md mb-6 md:mb-0 md:hidden'
        />
        <h2 className='text-4xl text-center md:text-left font-semibold uppercase'>
          bringing you the <span className='text-orange'>best</span> audio gear
        </h2>
        <p className='text-center md:text-left text-light-black'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <Image
        src='/images/shared/desktop/image-best-gear.jpg'
        alt='best gear image'
        width={1920}
        height={1080}
        className='rounded-md hidden md:block'
      />
    </div>
  );
}

export default GeneralDescription;
