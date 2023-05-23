import { notFound } from 'next/navigation';
import products from './data/products.json';
import { Product } from './models';

export const gallery = [
  {
    id: 1,
    label: 'Headphones',
    image: '/images/shared/desktop/image-headphones.png',
  },
  {
    id: 2,
    label: 'Speakers',
    image: '/images/shared/desktop/image-speakers.png',
  },
  {
    id: 3,
    label: 'Earphones',
    image: '/images/shared/desktop/image-earphones.png',
  },
];

export function getProducts() {
  return JSON.parse(JSON.stringify(products.products));
}

function sortByNewness(a: Product, b: Product) {
  if (a.new && !b.new) {
    return -1;
  } else if (!a.new && b.new) {
    return 1;
  } else {
    return 0;
  }
}

export function getCategoryProducts(category: string) {
  let categoryProducts = JSON.parse(JSON.stringify(products.products)).filter(
    (product: Product) => product.category === category
  );

  categoryProducts.sort(sortByNewness);

  return categoryProducts;
}

export function getProductBySlug(slug: string) {
  const product = products.products.find(
    (product: Product) => product.slug === slug
  );

  if (!product) {
    notFound();
  }

  return product;
}
