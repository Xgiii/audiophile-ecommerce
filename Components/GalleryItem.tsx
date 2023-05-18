import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function GalleryItem({ image, label }: { image: string; label: string }) {
  return (
    <div className='relative bg-light-gray w-[32%] flex flex-col items-center justify-center rounded-md pt-14 py-6 mt-24 group cursor-pointer'>
      <Image
        src={image}
        alt={label}
        width={150}
        height={150}
        className='absolute -top-12'
      />
      <h2 className='text-sm md:text-base font-bold uppercase mt-8 mb-2 tracking-[0.15em]'>
        {label}
      </h2>

      <Link href={'/' + label} className='flex items-center space-x-2'>
        <p className='text-gray-400 uppercase text-xs md:text-sm group-hover:text-orange transition-all'>
          shop
        </p>
        <Image
          src='images/shared/desktop/icon-arrow-right.svg'
          alt='arrow icon'
          width={10}
          height={10}
        />
      </Link>
    </div>
  );
}

export default GalleryItem;
