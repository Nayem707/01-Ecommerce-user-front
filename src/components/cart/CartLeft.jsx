import React from 'react';
import CartModal from './CartModal';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../features/reduxCart/CartSlice';

const CartLeft = () => {
  const cartItem = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const removeToCart = (id) => {
    dispatch(remove(id));
  };

  const displayCartItem = cartItem.map((product) => (
    <li key={product.id} className='flex py-6'>
      <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
        <img
          src='productimageSrc'
          className='h-full w-full object-cover object-center'
        />
      </div>

      <div className='ml-4 flex flex-1 flex-col'>
        <div>
          <div className='flex justify-between text-base font-medium text-gray-900'>
            <h3>
              <p>{product.title}</p>
            </h3>
            <p className='ml-4'>${product.price}</p>
          </div>
          <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
        </div>
        <div className='flex flex-1 items-end justify-between text-sm '>
          <div className='inline-flex items-center mt-2'>
            <button className='bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M20 12H4'
                />
              </svg>
            </button>
            <div className='bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none'>
              2
            </div>
            <button className='bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-4'
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

          <div className='flex'>
            <button
              onClick={() => removeToCart(product.id)}
              type='button'
              className='font-medium text-red-600 hover:text-indigo-500'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <div className='mt-5 '>
      <div className='flow-root'>
        <ul role='list' className='-my-6 divide-y mb-2 divide-gray-200'>
          {displayCartItem}
        </ul>
      </div>
      <div className='border-t border-gray-200 px-4 sm:px-6'>
        <div className='flex justify-between text-base font-medium text-gray-900'>
          <p>Subtotal</p>
          <p>$262.00</p>
        </div>
        <p className='mt-0.5 text-sm text-gray-500'>
          Shipping and taxes calculated at checkout.
        </p>
        <div className='mt-6'>
          <CartModal />
        </div>
        <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
          <button
            type='button'
            className='flex justify-center items-center font-medium text-indigo-600 hover:text-indigo-500'
          >
            <span aria-hidden='true'>
              {' '}
              <svg
                className='fill-current mr-2 text-indigo-600 w-4'
                viewBox='0 0 448 512'
              >
                <path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
              </svg>{' '}
            </span>
            <Link to='/products' className='text-sm font-semibold leading-6 '>
              Back to Shop
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartLeft;
