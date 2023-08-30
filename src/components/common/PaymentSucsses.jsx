import React from 'react';

const PaymentSucsses = () => {
  return (
    <div className='bg-gray-100 h-screen'>
      <div className='bg-white p-6  md:mx-auto'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6'
        >
          <path
            fillRule='evenodd'
            d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
            clipRule='evenodd'
          />
        </svg>

        <div className='text-center'>
          <h3 className='md:text-2xl text-base text-gray-900 font-semibold text-center'>
            Payment Done!
          </h3>
          <p className='text-gray-600 my-2'>
            Thank you for completing your secure online payment.
          </p>
          <p> Have a great day! </p>
          <div className='py-10 text-center'>
            <a
              href='#'
              className='px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3'
            >
              GO BACK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucsses;
