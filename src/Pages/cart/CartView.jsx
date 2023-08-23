import React from 'react';
import CartLeft from '../../components/cart/CartLeft';

const CartView = () => {
  return (
    <div className='w-6/12 mx-auto m-5 divide-y-2'>
      <h1 className='text-2xl font-semibold'>Your Collections</h1>
      <div className='p-5'>
        <CartLeft />
      </div>
    </div>
  );
};

export default CartView;
