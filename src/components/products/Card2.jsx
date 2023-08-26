import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { add } from '../../features/Cart/CartSlice';

const Card2 = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <div className='grid grid-rows-1 mx-auto grid-flow-col gap-4 max-w-md'>
        {item.map((product) => {
          return (
            <>
              <div key={product.id} className=' bg-white shadow rounded'>
                <div className='  bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center'>
                  <div className='flex justify-between'>
                    <input type='checkbox' />
                    <button className='text-white hover:text-blue-500'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M12 4v16m8-8H4'
                        />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <span className='uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none'>
                      available
                    </span>
                  </div>
                </div>
                <div className='p-4 flex flex-col items-center'>
                  <p className='text-gray-400 font-light text-xs text-center'>
                    Hammond robotics
                  </p>
                  <Link to='/products/1'>
                    <h1 className='text-gray-800 text-center mt-1 '>
                      Product Info
                    </h1>
                  </Link>
                  <p className='text-center text-gray-800 mt-1'>
                    ${product.price}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className='py-2 px-4  bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center'
                  >
                    Add
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 ml-2'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card2;
