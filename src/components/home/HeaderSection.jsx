import React from 'react';
import GetOffers from './GetOffers';
const product = {
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
};
const HeaderSection = () => {
  return (
    <section>
      <div className='bg-white'>
        <div className='p-5'>
          <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
            <div className=' cursor-pointer aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'>
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
              <div className='cursor-pointer aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
                <img
                  src={product.images[1].src}
                  alt={product.images[1].alt}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className=' cursor-pointer aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
                <img
                  src={product.images[2].src}
                  alt={product.images[2].alt}
                  className='h-full w-full object-cover object-center'
                />
              </div>
            </div>
            <div className='aspect-h-5 aspect-w-5 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg'>
              <GetOffers />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
