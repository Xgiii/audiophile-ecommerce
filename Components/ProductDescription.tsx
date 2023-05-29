import { Product } from '@/models';
import React from 'react';

function ProductDescription({ product }: { product: Product }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mt-20'>
      <div className='flex flex-col md:col-span-2'>
        <h2 className='text-3xl tracking-wider font-semibold mb-4 uppercase'>
          features
        </h2>
        <p className='text-light-black text-sm tracking-wide'>
          {product.features}
        </p>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-3xl tracking-wider font-semibold mb-4 uppercase'>
          in the box
        </h2>
        <ul className='text-light-black text-sm tracking-wide'>
          {product.includedItems?.map(({ item, quantity }) => (
            <div className='flex items-center' key={item}>
              <p className='text-orange font-semibold mr-4'>{quantity}x</p>
              <li>{item}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductDescription;
