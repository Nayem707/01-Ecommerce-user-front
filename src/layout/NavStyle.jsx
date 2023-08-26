import { Link, NavLink } from 'react-router-dom';
import ModalView from '../components/common/Modal';
import { useSelector } from 'react-redux';

export default function NavStyle() {
  const cartItem = useSelector((state) => state.cart);

  return (
    <>
      <header className='header sticky top-0 bg-white shadow-md flex items-center justify-between px-7 py-02'>
        <h1 className='w-3/12'>
          <Link to='/'>
            <img
              src='https://getlogovector.com/wp-content/uploads/2021/05/yours-clothing-logo-vector.png'
              alt=''
              className='h-20'
            />
          </Link>
        </h1>

        <nav className='nav font-semibold text-lg'>
          <ul className='flex items-center'>
            <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active'>
              <Link to='/'>Home</Link>
            </li>
            <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer'>
              <Link to='/products'>Products</Link>
            </li>
            <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer'>
              <Link to='/cart'>Collections</Link>
            </li>
            <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
        {/* Search BOX */}
        <div className='box'>
          <div className='box-wrapper'>
            <div className=' bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200'>
              <button className='outline-none focus:outline-none'>
                <svg
                  className=' w-5 text-gray-600 h-5 cursor-pointer'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                </svg>
              </button>
              <input
                type='search'
                name=''
                id=''
                placeholder='search for Products'
                className='w-full pl-4 text-sm outline-none focus:outline-none bg-transparent'
              />
              <div className='select'>
                <select
                  name=''
                  id=''
                  className='text-sm outline-none focus:outline-none bg-transparent'
                >
                  <option value='all' selected>
                    All
                  </option>
                  <option value='photo'>T-shrt</option>
                  <option value='illustration'>Bug</option>
                  <option value='vector'>Vector</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Search BOX-end */}
        <div className='w-3/12 flex justify-end gap-4'>
          <a href='notifications'>
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
                d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
              />
            </svg>
          </a>
          <span className=' '>{cartItem.length}</span>
          <span>
            <ModalView />
          </span>

          <NavLink to='/setting/user' className='flex gap-5'>
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
                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          </NavLink>
        </div>
      </header>
    </>
  );
}
