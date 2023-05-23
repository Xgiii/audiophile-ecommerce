import { Product } from '@/models';
import Image from 'next/image';
import React from 'react';
import MainBtn from './MainBtn';

function ProductPageItem({ product }: { product: Product }) {
  return (
    <div className='grid grid-cols-3 md:grid-cols-2 gap-12 lg:gap-20 '>
      <div className='flex items-center justify-center'>
        <Image
          src={product.image?.desktop!}
          alt={product.name}
          width={600}
          height={600}
          className='hidden md:block rounded-md'
        />
        <Image
          src={product.image?.tablet!}
          alt={product.name}
          width={300}
          height={300}
          className='col-span-1 md:hidden rounded-md'
        />
      </div>
      <div className='flex flex-col col-span-2 md:col-span-1 justify-center'>
        {product.new && (
          <p className='text-orange uppercase tracking-[0.4em] mb-2'>
            new product
          </p>
        )}
        <h2 className='font-semibold text-4xl mb-4 uppercase'>
          {product.name}
        </h2>
        <p className='text-light-black mb-4 text-sm md:text-base'>
          {product.description}
        </p>
        <p className='font-bold mb-4'>
          $ {product.price.toLocaleString('en-US')}
        </p>
        <div className='flex'>
          <button className='bg-light-gray text-light-black  text-xl font-bold py-2 px-4 hover:bg-gray-200 hover:text-orange transition-all'>
            -
          </button>

          <div className='bg-light-gray text-black flex items-center justify-center py-2 px-4'>
            0
          </div>
          <button className='bg-light-gray text-light-black text-xl font-bold py-2 px-4 mr-4 hover:bg-gray-200 hover:text-orange transition-all'>
            +
          </button>
          <MainBtn>Add to cart</MainBtn>
        </div>
      </div>
    </div>
  );
}

export default ProductPageItem;
