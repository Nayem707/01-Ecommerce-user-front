import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { add } from '../../features/Cart/CartSlice';

const Card2 = ({ id, img, price, title }) => {
  const dispatch = useDispatch();

  return (
    <>
      <section className=''>
        <div className=' bg-white shadow rounded'>
          <div className='  bg-gray-200 flex flex-col justify-center p-4 bg-cover bg-center'>
            <div>
              <Link to='/products/1'>
                <img src={img} alt='..' className='img h-64' />
              </Link>
            </div>
          </div>
          <div className='p-4 flex flex-col items-center'>
            <Link to='/products/1'>
              <h1 className='text-gray-800 text-center mt-1 '>{title}</h1>
            </Link>
            <p className='text-center text-gray-800 mt-1'>${price}</p>

            <button
              onClick={() => dispatch(add(id))}
              className='py-2 px-4  bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center'
            >
              Add
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card2;
