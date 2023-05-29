'use client';

import { Product } from '@/models';
import Image from 'next/image';
import React, { useState } from 'react';
import MainBtn from './MainBtn';
import { useAppDispatch } from '@/store/hooks';
import { cartActions } from '@/store/cartSlice';

function ProductPageItem({ product }: { product: Product }) {
  const [qty, setQty] = useState(0);

  const dispatch = useAppDispatch();

  function addToCartHandler() {
    dispatch(
      cartActions.addItem({
        id: product.id,
        cartImage: product.cartImage,
        price: product.price,
        shortName: product.shortName,
        quantity: qty,
      })
    );
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 sm:gap-12 lg:gap-20 '>
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
          className='col-span-1 hidden sm:block md:hidden rounded-md'
        />
        <Image
          src={product.image?.mobile!}
          alt={product.name}
          width={1920}
          height={1080}
          className='sm:hidden rounded-md mb-6'
        />
      </div>
      <div className='flex flex-col col-span-2 md:col-span-1 justify-center'>
        {product.new && (
          <p className='text-orange text-sm md:text-base uppercase tracking-[0.4em] mb-2'>
            new product
          </p>
        )}
        <h2 className='font-semibold text-2xl sm:text-4xl mb-4 uppercase'>
          {product.name}
        </h2>
        <p className='text-light-black mb-4 text-sm md:text-base'>
          {product.description}
        </p>
        <p className='font-bold mb-4'>
          $ {product.price.toLocaleString('en-US')}
        </p>
        <div className='flex justify-between'>
          <div className='flex'>
            <button
              onClick={() => setQty((prevQty) => prevQty - 1)}
              disabled={qty === 0}
              className='bg-light-gray text-light-black  text-xl font-bold py-2 px-4 hover:bg-gray-200 hover:text-orange transition-all'
            >
              -
            </button>

            <div className='bg-light-gray text-black flex items-center justify-center w-10 h-full'>
              {qty}
            </div>
            <button
              onClick={() => setQty((prevQty) => prevQty + 1)}
              className='bg-light-gray text-light-black text-xl font-bold py-2 px-4 mr-2 hover:bg-gray-200 hover:text-orange transition-all'
            >
              +
            </button>
          </div>
          <MainBtn onClick={addToCartHandler}>Add to cart</MainBtn>
        </div>
      </div>
    </div>
  );
}

export default ProductPageItem;
