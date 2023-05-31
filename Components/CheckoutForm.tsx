'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';
import Checkbox from './Checkbox';
import Image from 'next/image';

function CheckoutForm() {
  const [checked, setChecked] = useState(1);

  return (
    <form className='col-span-2 bg-white rounded-md p-6'>
      <h2 className='text-[1.65rem] font-semibold uppercase'>checkout</h2>
      <p className='text-orange uppercase tracking-wider font-semibold text-sm mt-8'>
        billing details
      </p>
      <div className='grid grid-cols-2 gap-6 mt-4'>
        <Input label='Name' placeholder='Alexei Ward' type='text' />
        <Input
          label='Email Address'
          placeholder='alexei@mail.com'
          type='email'
        />
        <Input label='Phone Number' placeholder='+1 202-555-0136' type='text' />
      </div>
      <p className='text-orange uppercase tracking-wider font-semibold text-sm mt-8'>
        shipping info
      </p>
      <div className='grid grid-cols-2 gap-6 mt-4'>
        <div className='col-span-2'>
          <Input
            label='Your Address'
            placeholder='1137 Williams Avenue'
            type='text'
          />
        </div>
        <Input label='Zip Code' placeholder='10001' type='text' />
        <Input label='City' placeholder='New York' type='text' />
        <Input label='Country' placeholder='United States' type='text' />
      </div>
      <p className='text-orange uppercase tracking-wider font-semibold text-sm mt-8'>
        payment details
      </p>
      <div className='grid grid-cols-2 gap-6 mt-4'>
        <p className='text-sm font-semibold'>Payment Method</p>
        <Checkbox
          onClick={() => setChecked(1)}
          active={checked === 1 ? true : false}
          label='e-Money'
        />
        <div className='col-start-2 w-full'>
          <Checkbox
            onClick={() => setChecked(2)}
            active={checked === 2 ? true : false}
            label='Cash on Delivery'
          />
        </div>
        {checked === 1 ? (
          <>
            <Input label='e-Money Number' placeholder='238521993' type='text' />
            <Input label='e-Money PIN' placeholder='6891' type='text' />
          </>
        ) : (
          <div className='flex items-center space-x-6 col-span-2'>
            <Image
              src='/images/checkout/icon-cash-on-delivery.svg'
              width={50}
              height={50}
              alt='cash on delivery'
            />
            <p className='text-light-black text-justify '>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}

export default CheckoutForm;
