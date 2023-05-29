import { Other } from '@/models';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MainBtn from './MainBtn';

function YouMayLike({ products }: { products: Other[] }) {
  return (
    <div className='mt-20'>
      <h2 className='text-3xl font-semibold uppercase text-center'>
        you may also like
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
        {products.map((product) => (
          <div key={product.slug} className='flex flex-col space-y-6'>
            <Image
              src={product.image.desktop}
              alt={product.name}
              width={600}
              height={600}
              className='hidden md:block rounded-md'
            />
            <Image
              src={product.image.mobile}
              alt={product.name}
              width={1920}
              height={1080}
              className='md:hidden rounded-md'
            />
            <h2 className='text-2xl font-semibold uppercase text-center'>
              {product.name}
            </h2>
            <Link href={`/${product.slug}`} className='text-center'>
              <MainBtn>see product</MainBtn>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YouMayLike;
