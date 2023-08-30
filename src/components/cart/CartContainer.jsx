import CartModal from './CartModal';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartContainer = () => {
  const { cartItems, total, amount, isLoading } = useSelector(
    (store) => store.cart
  );

  if (amount < 1) {
    return (
      <div className=' p-10'>
        <div className='flex justify-center text-base font-medium text-gray-900 p-5'>
          <h3>Your Collection is Currently Emty!</h3>
        </div>
      </div>
    );
  }

  return (
    <div className='mt-5 '>
      <div className='flow-root'>
        <ul role='list' className='-my-6 divide-y mb-2 divide-gray-200'>
          {isLoading && (
            <h2 className=' mx-auto items-center justify-center text-center p-5 text-2xl'>
              Loading...
            </h2>
          )}

          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
      <div className='border-t border-gray-200 px-4 sm:px-6'>
        <div className='flex justify-between text-base font-medium text-gray-900'>
          <p>Subtotal</p>
          <p>${total.toFixed(2)}</p>
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

export default CartContainer;
