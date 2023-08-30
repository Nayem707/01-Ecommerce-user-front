import React from 'react';

const GetOffers = () => {
  return (
    <section className='rounded-lg shadow-2xl md:grid gap-2'>
      <div className='text-center sm:p-6 md:col-span-2 lg:p-8 border rounded-md'>
        <p className='text-sm font-semibold uppercase tracking-widest'>
          Run with the pack
        </p>

        <h2 className='mt-6 font-black uppercase'>
          <span className='text-4xl font-black sm:text-5xl lg:text-6xl'>
            Get 20% off
          </span>

          <span className='mt-2 block text-sm'>
            On your next order over $50
          </span>
        </h2>

        <a
          className='mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white'
          href=''
        >
          Get Discount
        </a>

        <p className='mt-8 text-xs font-medium uppercase text-gray-400'>
          Offer valid until 24th March, 2021 *
        </p>
      </div>
      <img
        alt='Trainer'
        src='https://electbox-codezeel.myshopify.com/cdn/shop/articles/blog-3_1400x949.jpg?v=1654331283'
        className='object-cover md:h-full rounded-md cursor-pointer'
      />
    </section>
  );
};

export default GetOffers;
