/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../features/Cart/CartSlice';

const Card2 = ({ item }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const isInCart = cartItems.find((cartItem) => cartItem.id === item.id);

  return (
    <>
      <section className=''>
        <div className='bg-white shadow rounded '>
          <div className=' flex flex-col justify-center bg-cover bg-center '>
            <div className=''>
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.img}
                  alt='..'
                  className='object-contain h-48 w-96'
                />
              </Link>
            </div>
          </div>
          <div className='p-4 flex flex-col'>
            <div className='flex justify-between items-center'>
              <p className=' text-lg font-bold text-gray-800'>${item.price}</p>
              {item.rating ? (
                <>
                  <p>⭐{item.rating}</p>
                </>
              ) : (
                ''
              )}
            </div>
            {isInCart ? (
              <button className='py-2 px-4  bg-blue-500 text-white rounded  mt-4 w-full flex items-center justify-center opacity-50 cursor-not-allowed'>
                Item added
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(addToCart(item));
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
