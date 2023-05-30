'use client';

import Summary from '@/Components/Summary';
import { useRouter } from 'next/navigation';
import React from 'react';

function CheckoutPage() {
  const router = useRouter();

  return (
    <div className='px-6 md:px-16 lg:px-32 2xl:px-[20vw] bg-light-gray'>
      <button
        onClick={() => router.back()}
        className='hover:underline text-light-black py-16'
      >
        Go Back
      </button>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-6 pb-20'>
        <div className='col-span-2 bg-white h-96 rounded-md'></div>
        <Summary />
      </div>
    </div>
  );
}

export default CheckoutPage;
