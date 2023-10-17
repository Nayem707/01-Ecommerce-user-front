import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import ModalView from '../components/common/Modal';

const links = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Menu', url: '/menu' },
  { id: 3, title: 'Products', url: '/products' },
  { id: 4, title: 'Collections', url: '/cart' },
];

//  MOBILE MENU FIXED-TOP
export const MenuTop = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=''>
      {/* SHORTCUT */}
      <img
        src={isOpen ? '/close.png' : '/menu.png'}
        alt=''
        width={30}
        height={30}
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer'
      />

      {isOpen && (
        <>
          <div className='bg-gradient-to-r from-gray-900 to-green-900 text-gray-200 p-5 absolute left-0 top-16 w-full flex flex-col gap-2 items-center text-2xl'>
            {/* Search BOX */}
            <div className='gap-1 rounded p-2 flex items-center w-100 border border-gray-200'>
              <button className='outline-none focus:outline-none'>
                <svg
                  className=' w-7 h-7 text-gray-200 cursor-pointer'
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
                placeholder='search for products'
                className='text-md outline-none focus:outline-none bg-transparent'
              />
            </div>
            {links.map((item) => (
              <Link
                className='hover:bg-slate-400 hover:rounded-md p-2'
                to={item.url}
                key={item.id}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

//  MOBILE MENU FIXED-BOTTOM
export const MenuBottom = () => {
  return (
    <main className='m-2 rounded-2xl block fixed bottom-0 inset-x-0 z-50 shadow-lg bg-gray-100 bg-opacity-60 border-t-2 border-royal/20'>
      <div className='flex justify-center px-5'>
        <Link
          to='/'
          className='w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white hover:rounded-xl'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 inline-block mb-1'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
            />
          </svg>
          {/* <span className='tab block text-xs'>Home</span> */}
        </Link>
        <Link
          to='/'
          className='w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white hover:rounded-xl'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 inline-block mb-1'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
            />
          </svg>
          {/* <span className='tab block text-xs'>Categories</span> */}
        </Link>
        <Link
          to='/'
          className='w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white hover:rounded-xl'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 inline-block mb-1'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
            />
          </svg>
          {/* <span className='tab block text-xs'>Gallery</span> */}
        </Link>
        <Link
          to='/'
          className='w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white hover:rounded-xl'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 inline-block mb-1'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
            />
          </svg>
          {/* <span className='tab block text-xs'>About</span> */}
        </Link>
      </div>
    </main>
  );
};

//  DESKTOP MENU FIXED-TOP
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav className='header sticky top-0 z-10 bg-white shadow-md flex items-center justify-between px-7 h-16'>
      <div className='w-3/11 nav-logo'>
        <Link to='/'>
          <img
            src='https://res.cloudinary.com/nayem490/image/upload/v1693437906/shop-logo_zlvemt.png'
            alt=''
            className='h-9 md:h-10'
          />
        </Link>
      </div>

      <div className='font-semibold text-lg hidden sm:block'>
        <ul className='flex items-center'>
          <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer'>
            <NavLink to='/products'>Products</NavLink>
          </li>
          <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer'>
            <NavLink to='/cart'>Collection</NavLink>
          </li>
          <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer'>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>

      {/* Search BOX */}
      <div className='box hidden md:block'>
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
                <option value='all'>All</option>
                <option value='photo'>T-shrt</option>
                <option value='illustration'>Bug</option>
                <option value='vector'>Vector</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-3/12 justify-end gap-4'>
        <a to='fav'>
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
        </a>

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
        <a to='/setting/user' className='flex gap-5'>
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
        </a>
      </div>

      {/* MOBILE MENU */}
      <div className='sm:hidden text-blue-900'>
        <MenuTop />
        <MenuBottom />
      </div>
    </nav>
  );
};

export default Navbar;

//   return (
//     <>
//       <header className='header sticky top-0 bg-slate-300 shadow-md flex items-center justify-between px-7 py-02'>
//         <h1 className='w-3/11'>
//           <Link to='/'>
//             <img
//               src='https://res.cloudinary.com/nayem490/image/upload/v1693437906/shop-logo_zlvemt.png'
//               alt=''
//               className='h-10'
//             />
//           </Link>
//         </h1>

//         <div className='font-semibold text-lg'>
//           <ul className='flex items-center'>
//             <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active'>
//               <NavLink to='/'>Home</NavLink>
//             </li>
//             <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer'>
//               <NavLink to='/products'>Products</NavLink>
//             </li>
//             <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer'>
//               <NavLink to='/cart'>Collection</NavLink>
//             </li>
//             <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer'>
//               <NavLink to='/contact'>Contact</NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* Search BOX */}
//         <div className='box'>
//           <div className='box-wrapper'>
//             <div className=' bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200'>
//               <button className='outline-none focus:outline-none'>
//                 <svg
//                   className=' w-5 text-gray-600 h-5 cursor-pointer'
//                   fill='none'
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth='2'
//                   stroke='currentColor'
//                   viewBox='0 0 24 24'
//                 >
//                   <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
//                 </svg>
//               </button>
//               <input
//                 type='search'
//                 name=''
//                 id=''
//                 placeholder='search for Products'
//                 className='w-full pl-4 text-sm outline-none focus:outline-none bg-transparent'
//               />
//               <div className='select '>
//                 <select
//                   name=''
//                   id=''
//                   className='cursor-pointer text-sm outline-none focus:outline-none bg-transparent'
//                 >
//                   <option value='all' selected>
//                     All
//                   </option>
//                   <option value='photo'>T-shrt</option>
//                   <option value='illustration'>Bug</option>
//                   <option value='vector'>Vector</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Search BOX-end */}

//         <div className='w-3/12 flex justify-end gap-4'>
//           <Link to='fav'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 24 24'
//               strokeWidth={1.5}
//               stroke='currentColor'
//               className='w-7 h-7'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
//               />
//             </svg>
//           </Link>

//           <div className=''>
//             <div
//               className='relative cursor-pointer'
//               onClick={() => setOpen(!open)}
//             >
//               {/* Cart Button */}
//               <div className='t-0  left-4 absolute '>
//                 <p className='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>
//                   {amount}
//                 </p>
//               </div>
//               <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 fill='none'
//                 viewBox='0 0 24 24'
//                 strokeWidth={1.5}
//                 stroke='currentColor'
//                 className='w-7 h-7'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
//                 />
//               </svg>
//             </div>

//             {open && <ModalView setOpen={setOpen} open={open} />}
//           </div>
//           {/* Cart Button-end */}
//           <Link to='/setting/user' className='flex gap-5'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 24 24'
//               strokeWidth={1.5}
//               stroke='currentColor'
//               className='w-7 h-7'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
//               />
//             </svg>
//           </Link>
//         </div>
//       </header>
//     </>
//   );
// }
