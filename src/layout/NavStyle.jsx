import { Link, NavLink } from 'react-router-dom';
import ModalView from '../components/common/Modal';

import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function NavStyle() {
  const [open, setOpen] = useState(false);
  const { amount } = useSelector((store) => store.cart);

  return (
    <>
      <header className='header sticky top-0 bg-white shadow-md flex items-center justify-between px-7 py-02'>
        <h1 className='w-3/11'>
          <Link to='/'>
            <img
              src='https://res.cloudinary.com/nayem490/image/upload/v1693437906/shop-logo_zlvemt.png'
              alt=''
              className='h-10'
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
              <Link to='/cart'>Collection</Link>
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
              <div className='select '>
                <select
                  name=''
                  id=''
                  className='cursor-pointer text-sm outline-none focus:outline-none bg-transparent'
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
          <NavLink to='fav'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>
          </NavLink>

          <div className=''>
            <div
              className='relative cursor-pointer'
              onClick={() => setOpen(!open)}
            >
              {/* Cart Button */}
              <div className='t-0  left-4 absolute '>
                <p className='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>
                  {amount}
                </p>
              </div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-7 h-7'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
              </svg>
            </div>
            {open && <ModalView setOpen={setOpen} open={open} />}
          </div>
          {/* Cart Button-end */}
          <NavLink to='/setting/user' className='flex gap-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'
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
