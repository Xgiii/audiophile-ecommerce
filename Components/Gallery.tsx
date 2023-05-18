import React from 'react';
import GalleryItem from './GalleryItem';
import { gallery } from '@/utils';

function Gallery() {
  return (
    <section className='px-6 md:px-16 lg:px-32 2xl:px-[20vw] flex justify-between'>
      {gallery.map((item) => (
        <GalleryItem key={item.id} label={item.label} image={item.image} />
      ))}
    </section>
  );
}

export default Gallery;
