import React from 'react';

const PageHeading1 = () => {
  return (
    <div className=''>
      <div className='md:px-6 2xl:px-0 2xl:mx-auto 2xl:container flex justify-center items-center'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex flex-col justify-start items-start'>
            <div className=' flex flex-row justify-end items-center space-x-3'>
              <p className='text-2xl font-semibold leading-normal text-gray-800'>
                Products
              </p>
              <p className='text-base leading-4 text-gray-600 mt-2'>
                ( Total: 100 products )
              </p>
            </div>
          </div>

          <button className='hover:text-gray-500 text-gray-600 bg-gray-100 py-3.5 px-3 rounded-sm flex flex-row justify-center items-center space-x-3'>
            <svg
              className='fill-stroke'
              width='24'
              height='16'
              viewBox='0 0 24 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4 14.6452V9.33875'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M4 6.30645V1'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12 14.6452V7.82263'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12 4.79032V1'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M20 14.6452V10.8549'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M20 7.82258V1'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M1 9.33875H7'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M9 4.79028H15'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M17 10.8549H23'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <p className='hidden md:block text-sm leading-none'>Filters</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageHeading1;
