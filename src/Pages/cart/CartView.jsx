import CartContainer from '../../components/cart/CartContainer';

const CartView = () => {
  return (
    <div className='w-6/12 mx-auto m-5 divide-y-2'>
      <h1 className='text-2xl font-semibold'>Your Collections</h1>
      <div className='p-5'>
        <CartContainer />
      </div>
    </div>
  );
};

export default CartView;
