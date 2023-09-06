import React, { useState } from 'react';
import CheckoutForm from './ChekoutForm';

const CartModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <span
        type='button'
        onClick={() => setShowModal(true)}
        className='flex items-center justify-center bg-slate-600 text-slate-200 cursor-pointer rounded-md border border-transparent h-10 text-base font-medium  shadow-sm hover:bg-indigo-700'
      >
        Checkout
      </span>

      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-5 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*body*/}
                <div className='relative flex-auto'>
                  <div className='leading-loose'>
                    <CheckoutForm setShowModal={setShowModal} />
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
};

export default CartModal;
