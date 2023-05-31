'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React from 'react';
import CartItem from './CartItem';
import { cartActions } from '@/store/cartSlice';
import MainBtn from './MainBtn';
import { useRouter } from 'next/navigation';
import { totalPrice } from '@/utils';

function Summary() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const price = totalPrice(cartItems);
  const vat = price * 0.2;
  const shipping = 50;
  const grandTotal = price + shipping + vat;

  return (
    <div className='bg-white p-12 xl:p-12 lg:p-6 rounded-md flex flex-col space-y-4 self-start'>
      <div className='flex justify-between items-center'>
        <h2 className='uppercase text-xl font-semibold'>summary</h2>
      </div>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} summary />
      ))}
      <div className='flex justify-between items-center'>
        <p className='uppercase text-sm text-light-black'>total</p>
        <p className='font-semibold text-lg'>
          $ {price.toLocaleString('en-US')}
        </p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='uppercase text-sm text-light-black'>shipping</p>
        <p className='font-semibold text-lg'>$ 50</p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='uppercase text-sm text-light-black'>vat (included)</p>
        <p className='font-semibold text-lg'>$ {vat.toLocaleString('en-US')}</p>
      </div>
      <div className='flex justify-between items-center pt-6'>
        <p className='uppercase text-sm text-light-black'>grand total</p>
        <p className='font-semibold text-lg text-orange'>
          $ {grandTotal.toLocaleString('en-US')}
        </p>
      </div>
      <MainBtn
        disabled={cartItems.length === 0}
        onClick={() => dispatch(cartActions.removeAll())}
      >
        continue & pay
      </MainBtn>
    </div>
  );
}

export default Summary;
