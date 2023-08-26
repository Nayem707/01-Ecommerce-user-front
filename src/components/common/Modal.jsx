import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, removeItem } from '../../features/Cart/CartSlice';

export default function ModalView({ setOpen, open }) {
  const { cartItems, total, isLoading, amount } = useSelector(
    (store) => store.cart
  );

  const dispatch = useDispatch();

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <div className='pointer-events-auto w-screen max-w-md'>
                    <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                      <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                        <div className='flex items-start justify-between'>
                          <h2 className='text-lg font-medium text-gray-900'>
                            Shopping cart
                          </h2>
                          <div className='ml-3 flex h-7 items-center border-none'>
                            <button
                              type='button'
                              className='relative -m-2 p-2 text-gray-400 hover:text-gray-500 '
                              onClick={() => setOpen(false)}
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-6 h-6'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M6 18L18 6M6 6l12 12'
                                />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className='mt-8'>
                          <div className='flow-root'>
                            <ul
                              role='list'
                              className='-my-6 divide-y divide-gray-200'
                            >
                              {amount < 1 && (
                                <div>
                                  <div className='flex justify-center text-base font-medium text-gray-900'>
                                    <h3>Your bag is Emty</h3>
                                  </div>
                                </div>
                              )}
                              {isLoading && (
                                <h2 className=' mx-auto items-center justify-center text-center p-5 text-2xl'>
                                  Loading...
                                </h2>
                              )}
                              {cartItems.map((items) => {
                                return (
                                  <li key={items.id} className='flex py-6'>
                                    <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                      <img
                                        src={items.img}
                                        className='h-full w-full object-cover object-center'
                                      />
                                    </div>

                                    <div className='ml-4 flex flex-1 flex-col'>
                                      <div>
                                        <div className='flex justify-between text-base font-medium text-gray-900'>
                                          <h3>
                                            <p>{items.title}</p>
                                          </h3>
                                          <p className='ml-4'>${items.price}</p>
                                        </div>
                                      </div>
                                      <div className='flex flex-1 items-end justify-between text-sm '>
                                        <div className='inline-flex items-center mt-2'>
                                          <button
                                            onClick={() => {
                                              {
                                                items.amount === 1 &&
                                                  dispatch(
                                                    removeItem(items.id)
                                                  );
                                              }
                                              dispatch(decrease(items.id));
                                            }}
                                            className='bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200'
                                          >
                                            -
                                          </button>

                                          <div className='bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none'>
                                            {items.amount}
                                          </div>

                                          <button
                                            onClick={() =>
                                              dispatch(increase(items.id))
                                            }
                                            className='bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200'
                                          >
                                            +
                                          </button>
                                        </div>

                                        <div className='flex'>
                                          <button
                                            onClick={() =>
                                              dispatch(removeItem(items.id))
                                            }
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
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                        <div className='flex justify-between text-base font-medium text-gray-900'>
                          <p>Subtotal</p>
                          <p>${total}</p>
                        </div>
                        <p className='mt-0.5 text-sm text-gray-500'>
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className='mt-6'>
                          <Link
                            to='/cart'
                            onClick={() => setOpen(!open)}
                            className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                          >
                            Checkout
                          </Link>
                        </div>
                        <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                          <Link
                            to='/products'
                            type='button'
                            className='font-medium text-indigo-600 hover:text-indigo-500'
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden='true'> &rarr;</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
