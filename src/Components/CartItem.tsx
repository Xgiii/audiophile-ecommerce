'use client';

import { CartItem } from '@/models';
import { cartActions } from '@/store/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import Image from 'next/image';
import React from 'react';

function CartItem({ item }: { item: CartItem }) {
  const dispatch = useAppDispatch();

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center space-x-4'>
        <Image
          src={item.cartImage}
          alt={item.shortName}
          width={60}
          height={60}
          className='rounded-md'
        />
        <div className='leading-tight'>
          <h2 className='font-semibold'>{item.shortName}</h2>
          <p className='text-sm text-light-black'>
            ${item.price.toLocaleString('en-US')}
          </p>
        </div>
      </div>
      <div className='flex'>
        <button
          onClick={() => dispatch(cartActions.removeItem(item.id))}
          disabled={item.quantity === 0}
          className='bg-light-gray text-light-black font-bold py-1 px-3 hover:bg-gray-200 hover:text-orange transition-all'
        >
          -
        </button>

        <div className='bg-light-gray text-black flex items-center justify-center w-6 py-1 h-full'>
          {item.quantity}
        </div>
        <button
          onClick={() =>
            dispatch(cartActions.addItem({ ...item, quantity: 1 }))
          }
          className='bg-light-gray text-light-black font-bold py-1 px-3 hover:bg-gray-200 hover:text-orange transition-all'
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
