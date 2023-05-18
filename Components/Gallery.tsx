import React from 'react';
import GalleryItem from './GalleryItem';

function Gallery() {
  const gallery = [
    {
      id: 1,
      label: 'Headphones',
      image: '/images/shared/desktop/image-headphones.png',
    },
    {
      id: 2,
      label: 'Speakers',
      image: '/images/shared/desktop/image-speakers.png',
    },
    {
      id: 3,
      label: 'Earphones',
      image: '/images/shared/desktop/image-earphones.png',
    },
  ];

  return (
    <section className='px-6 md:px-16 lg:px-32 2xl:px-[20vw] flex justify-between'>
      {gallery.map((item) => (
        <GalleryItem key={item.id} label={item.label} image={item.image} />
      ))}
    </section>
  );
}

export default Gallery;
