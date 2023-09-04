/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../features/Cart/CartSlice';
// import { toast } from 'react-toastify';

const Card2 = ({ item }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const isInCart = cart.cartItems.find((cartItem) => cartItem.id === item.id);

  return (
    <>
      <section className=''>
        <div className=' bg-white shadow rounded'>
          <div className='  bg-gray-200 flex flex-col justify-center p-4 bg-cover bg-center'>
            <div>
              <Link to='/products/1'>
                <img src={item.img} alt='..' className='img h-64' />
              </Link>
            </div>
          </div>
          <div className='p-4 flex flex-col items-center'>
            <Link to='/products/1'>
              <h1 className='text-gray-800 text-center mt-1 '>{item.title}</h1>
            </Link>
            <p className='text-center text-gray-800 mt-1'>${item.price}</p>

            {isInCart ? (
              <button className='py-2 px-4  bg-blue-500 text-white rounded  mt-4 w-full flex items-center justify-center opacity-50 cursor-not-allowed'>
                Item added
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(addToCart(item));
                  // toast('Item Added!');
                }}
                className='py-2 px-4  bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center'
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Card2;
