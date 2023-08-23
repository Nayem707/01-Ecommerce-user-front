import React from 'react';
import CartModal from './CartModal';
import { Link } from 'react-router-dom';
const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },

  {
    id: 3,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 4,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  // More products...
];
const CartLeft = () => {
  return (
    <div className='mt-5 '>
      <div className='flow-root'>
        <ul role='list' className='-my-6 divide-y mb-2 divide-gray-200'>
          {products.map((product) => (
            <li key={product.id} className='flex py-6'>
              <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className='h-full w-full object-cover object-center'
                />
              </div>

              <div className='ml-4 flex flex-1 flex-col'>
                <div>
                  <div className='flex justify-between text-base font-medium text-gray-900'>
                    <h3>
                      <a href={product.href}>{product.name}</a>
                    </h3>
                    <p className='ml-4'>{product.price}</p>
                  </div>
                  <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
                </div>
                <div className='flex flex-1 items-end justify-between text-sm '>
                  <div className=''>
                    <label className='sr-only'>Quantity</label>

                    <div className='flex items-center gap-1'>
                      <button
                        type='button'
                        className='w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='w-7 h-7'
                        >
                          <path
                            fillRule='evenodd'
                            d='M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>

                      <input
                        type='number'
                        id='Quantity'
                        value='1'
                        className='h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none'
                      />

                      <button
                        type='button'
                        className='w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='w-6 h-6'
                        >
                          <path
                            fillRule='evenodd'
                            d='M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className='flex'>
                    <button
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
          ))}
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
