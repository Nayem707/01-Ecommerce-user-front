import React from 'react';
import ProductsHeading from '../../components/common/ProductsHeading';
import Card from '../../components/common/Card';
import SliderCommon from '../../components/common/SliderCommon';
import Filter1 from '../../components/common/Filter';
import Card2 from '../../components/common/Card2';
import ProductCard3 from '../../components/products/ProductCard3';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
];

const Products = () => {
  return (
    <>
      <div className='bg-white relative '>
        <div className=' col-span-2 flex '>
          <div className='   p-2 pt-10 w-60 h-screen '>
            <Filter1 />
          </div>
          <div className='w-full pt-10 px-4 divide-y-2 divide-zinc-700'>
            <div className='px-10 text-3xl mb-5'>
              <ProductsHeading />
            </div>
            <div className='p-10'>
              <SliderCommon slidesToShow={4} arrowsScroll={2}>
                {products.map((card) => {
                  return (
                    <>
                      <div className='m-1 shadow-md'>
                        <Card item={card} key={card.id} />
                      </div>
                    </>
                  );
                })}
              </SliderCommon>
            </div>

            <div className=' flex flex-row items-center space-x-3 pt-5'>
              <div className='px-10 text-3xl mb-5'>
                <p className='text-2xl font-semibold leading-normal text-gray-800'>
                  Sprots
                </p>
                <p className='text-base leading-4 text-gray-600 mt-2'>
                  (09 products)
                </p>
              </div>
              <Card2 />
              <Card2 />
              <Card2 />
            </div>
            <ProductCard3 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
