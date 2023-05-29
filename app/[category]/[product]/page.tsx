import Gallery from '@/Components/Gallery';
import GeneralDescription from '@/Components/GeneralDescription';
import ProductDescription from '@/Components/ProductDescription';
import ProductGallery from '@/Components/ProductGallery';
import ProductPageItem from '@/Components/ProductPageItem';
import YouMayLike from '@/Components/YouMayLike';
import { getProductBySlug } from '@/utils';
import Link from 'next/link';
import React from 'react';

function ProductPage({ params }: { params: { product: string } }) {
  const product = getProductBySlug(params.product);

  return (
    <>
      <div className='px-6 md:px-16 lg:px-32 2xl:px-[20vw] pb-20'>
        <div className='py-10'>
          <Link
            href={`/${product.category}`}
            className='hover:underline text-light-black'
          >
            Go Back
          </Link>
        </div>
        <ProductPageItem product={product} />
        <ProductDescription product={product} />
        <ProductGallery gallery={product.gallery} />
        <YouMayLike products={product.others} />
      </div>
      <Gallery />
      <GeneralDescription />
    </>
  );
}

export default ProductPage;
