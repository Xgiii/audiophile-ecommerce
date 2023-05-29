import Gallery from '@/Components/Gallery';
import GeneralDescription from '@/Components/GeneralDescription';
import HorizontalLine from '@/Components/HorizontalLine';
import MainBtn from '@/Components/MainBtn';
import { Product } from '@/models';
import { getCategoryProducts, getProducts } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

function ProductsPage({
  params: { category },
}: {
  params: { category: string };
}) {
  const products: Product[] = getCategoryProducts(category);

  if (products.length === 0) {
    notFound();
  }

  return (
    <>
      <header className='relative flex justify-center items-center bg-main-black w-full h-[20vh]'>
        <HorizontalLine />
        <h1 className='text-white uppercase text-4xl tracking-wider font-semibold'>
          {category}
        </h1>
      </header>
      <section className='px-6 md:px-16 lg:px-32 2xl:px-[20vw] grid grid-cols-1 md:grid-cols-2 gap-24 my-16'>
        {products.map((product, index) => (
          <>
            <ProductItem key={product.id} index={index} product={product} />
          </>
        ))}
      </section>
      <Gallery />
      <GeneralDescription />
    </>
  );
}

function ProductItem({ product, index }: { product: Product; index: number }) {
  return (
    <>
      {index % 2 === 0 ? (
        <>
          <Image
            src={product.image?.desktop!}
            alt={product.name}
            width={800}
            height={800}
            className='rounded-md'
          />
          <div className='flex flex-col items-center text-center md:text-left md:items-start justify-center'>
            {product.new && (
              <p className='text-orange uppercase tracking-[0.4em] mb-2'>
                new product
              </p>
            )}
            <h2 className='font-semibold text-3xl mb-6'>{product.name}</h2>
            <p className='text-light-black mb-6'>{product.description}</p>
            <Link href={`/${product.category}/${product.slug}`}>
              <MainBtn>see product</MainBtn>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className='hidden md:flex flex-col items-center text-center md:text-left md:items-start justify-center '>
            {product.new && (
              <p className='text-orange uppercase tracking-[0.4em] mb-2'>
                new product
              </p>
            )}
            <h2 className='font-semibold text-3xl mb-6'>{product.name}</h2>
            <p className='text-light-black mb-6'>{product.description}</p>
            <Link href={`/${product.category}/${product.slug}`}>
              <MainBtn>see product</MainBtn>
            </Link>
          </div>
          <Image
            src={product.image?.desktop!}
            alt={product.name}
            width={800}
            height={800}
            className='rounded-md'
          />
          <div className='flex md:hidden flex-col items-center text-center md:text-left md:items-start justify-center'>
            {product.new && (
              <p className='text-orange uppercase tracking-[0.4em] mb-2'>
                new product
              </p>
            )}
            <h2 className='font-semibold text-3xl mb-6'>{product.name}</h2>
            <p className='text-light-black mb-6'>{product.description}</p>
            <Link href={`/${product.category}/${product.slug}`}>
              <MainBtn>see product</MainBtn>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export async function generateStaticParams() {
  const products = getProducts();

  return products.map((product: Product) => ({
    category: product.category,
  }));
}

export default ProductsPage;
