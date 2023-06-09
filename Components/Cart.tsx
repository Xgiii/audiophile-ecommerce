'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React from 'react';
import CartItem from './CartItem';
import { cartActions } from '@/store/cartSlice';
import MainBtn from './MainBtn';
import { useRouter } from 'next/navigation';
import { totalPrice } from '@/utils';

function Cart() {
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  return (
    <div className='bg-white p-12 rounded-md flex flex-col space-y-4 w-[100vw] sm:w-96'>
      {cartItems.length === 0 ? (
        <p className='text-center text-xl text-light-black'>Cart is empty</p>
      ) : (
        <>
          <div className='flex justify-between items-center'>
            <h2 className='uppercase text-xl font-semibold'>cart</h2>
            <button
              onClick={() => dispatch(cartActions.removeAll())}
              className='underline text-light-black hover:text-orange transition-all'
            >
              Remove All
            </button>
          </div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className='flex justify-between items-center'>
            <p className='uppercase text-sm text-light-black'>total</p>
            <p className='font-semibold text-lg'>
              $ {totalPrice(cartItems).toLocaleString('en-US')}
            </p>
          </div>
          <MainBtn onClick={() => router.push('/checkout')}>checkout</MainBtn>
        </>
      )}
    </div>
  );
}

export default Cart;
