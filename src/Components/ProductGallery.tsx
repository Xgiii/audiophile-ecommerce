import React from 'react';
import { Gallery } from '../../models';
import Image from 'next/image';

function ProductGallery({ gallery }: { gallery: Gallery }) {
  return (
    <div className='grid grid-cols-5 grid-rows-2 gap-4 mt-20 [&>*]:rounded-md'>
      <Image
        src={gallery.first.desktop}
        alt='first gallery image'
        width={1920}
        height={1080}
        className='w-full h-full object-cover col-span-2'
      />
      <Image
        src={gallery.second.desktop}
        alt='second gallery image'
        width={1920}
        height={1080}
        className='row-start-2 w-full h-full object-cover col-span-2'
      />
      <Image
        src={gallery.third.desktop}
        alt='third gallery image'
        width={1600}
        height={1600}
        className='col-span-3 row-span-2 '
      />
    </div>
  );
}

export default ProductGallery;
