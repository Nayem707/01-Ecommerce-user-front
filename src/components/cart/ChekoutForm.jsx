import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearCart } from '../../features/Cart/CartSlice';

export default function CheckoutForm({ setShowModal }) {
  const { total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    toast('Payement Successfull!');
    dispatch(clearCart());
    navigate('/payment');
  };

  return (
    <form
      className='max-w-xl m-4 p-5 bg-white rounded '
      onSubmit={handleSubmit}
    >
      <p className='text-gray-800 font-semibold text-2xl'>
        Customer information
      </p>
      <div className=''>
        <label className='block text-sm text-gray-00' htmlFor='cus_name'>
          Name
        </label>
        <input
          className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
          id='cus_name'
          name='cus_name'
          type='text'
          required
          placeholder='Your Name'
          aria-label='Name'
        />
      </div>
      <div className='mt-2'>
        <label className='block text-sm text-gray-600' htmlFor='cus_email'>
          Email
        </label>
        <input
          className='w-full px-5  py-4 text-gray-700 bg-gray-200 rounded'
          id='cus_email'
          name='cus_email'
          type='text'
          required
          placeholder='Your Email'
          aria-label='Email'
        />
      </div>
      <div className='mt-2'>
        <label className=' block text-sm text-gray-600' htmlFor='cus_email'>
          Address
        </label>
        <input
          className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
          id='cus_email'
          name='cus_email'
          type='text'
          required
          placeholder='Street'
          aria-label='Email'
        />
      </div>
      <div className='mt-2'>
        <label className=' text-sm block text-gray-600' htmlFor='cus_email'>
          City
        </label>
        <input
          className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
          id='cus_email'
          name='cus_email'
          type='text'
          required
          placeholder='City'
          aria-label='Email'
        />
      </div>
      <div className='inline-block mt-2 w-1/2 pr-1'>
        <label className=' block text-sm text-gray-600' htmlFor='cus_email'>
          Country
        </label>
        <input
          className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
          id='cus_email'
          name='cus_email'
          type='text'
          required
          placeholder='Country'
          aria-label='Email'
        />
      </div>
      <div className='inline-block mt-2 -mx-1 pl-1 w-1/2'>
        <label className='block text-sm text-gray-600' htmlFor='cus_email'>
          Zip
        </label>
        <input
          className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
          id='cus_email'
          name='cus_email'
          type='text'
          required
          placeholder='Zip'
          aria-label='Email'
        />
      </div>
      <p className='mt-4 text-gray-800 font-medium'>Payment information</p>
      <div className=''>
        <label className='block text-sm text-gray-600' htmlFor='cus_name'>
          Card
        </label>
        <input
          className='w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
          id='cus_name'
          name='cus_name'
          type='text'
          required
          placeholder='Card Number MM/YY CVC'
          aria-label='Name'
        />
      </div>
      <div className='mt-4'>
        <span className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded'>
          Total: ${total}
        </span>
      </div>
      <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
        <button
          className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
          type='button'
          onClick={() => setShowModal(false)}
        >
          Cencel
        </button>
        <button
          className=' bg-slate-900 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
