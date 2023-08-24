import React from 'react';
import { useState } from 'react';

// const Filter2 = () => {
//   return (

//  <div className='space-y-2 mb-5'>
//       <details className='overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
//         <summary className='flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition'>
//           <span className='text-sm font-medium'> Availability </span>

//           <span className='transition group-open:-rotate-180'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 24 24'
//               strokeWidth='1.5'
//               stroke='currentColor'
//               className='h-4 w-4'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M19.5 8.25l-7.5 7.5-7.5-7.5'
//               />
//             </svg>
//           </span>
//         </summary>

//         <div className='border-t border-gray-200 bg-white'>
//           <header className='flex items-center justify-between p-4'>
//             <span className='text-sm text-gray-700'> 0 Selected </span>

//             <button
//               type='button'
//               className='text-sm text-gray-900 underline underline-offset-4'
//             >
//               Reset
//             </button>
//           </header>

//           <ul className='space-y-1 border-t border-gray-200 p-4'>
//             <li>
//               <label
//                 htmlFor='FilterInStock'
//                 className='inline-flex items-center gap-2'
//               >
//                 <input
//                   type='checkbox'
//                   id='FilterInStock'
//                   className='h-5 w-5 rounded border-gray-300'
//                 />

//                 <span className='text-sm font-medium text-gray-700'>
//                   In Stock (5+)
//                 </span>
//               </label>
//             </li>

//             <li>
//               <label
//                 htmlFor='FilterPreOrder'
//                 className='inline-flex items-center gap-2'
//               >
//                 <input
//                   type='checkbox'
//                   id='FilterPreOrder'
//                   className='h-5 w-5 rounded border-gray-300'
//                 />

//                 <span className='text-sm font-medium text-gray-700'>
//                   Pre Order (3+)
//                 </span>
//               </label>
//             </li>

//             <li>
//               <label
//                 htmlFor='FilterOutOfStock'
//                 className='inline-flex items-center gap-2'
//               >
//                 <input
//                   type='checkbox'
//                   id='FilterOutOfStock'
//                   className='h-5 w-5 rounded border-gray-300'
//                 />

//                 <span className='text-sm font-medium text-gray-700'>
//                   Out of Stock (10+)
//                 </span>
//               </label>
//             </li>
//           </ul>
//         </div>
//       </details>

//       <details className='overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
//         <summary className='flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition'>
//           <span className='text-sm font-medium'> Price </span>

//           <span className='transition group-open:-rotate-180'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 24 24'
//               strokeWidth='1.5'
//               stroke='currentColor'
//               className='h-4 w-4'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M19.5 8.25l-7.5 7.5-7.5-7.5'
//               />
//             </svg>
//           </span>
//         </summary>

//         <div className='border-t border-gray-200 bg-white'>
//           <header className='flex items-center justify-between p-4'>
//             <span className='text-sm text-gray-700'>
//               {' '}
//               The highest price is $600{' '}
//             </span>

//             <button
//               type='button'
//               className='text-sm text-gray-900 underline underline-offset-4'
//             >
//               Reset
//             </button>
//           </header>

//           <div className='border-t border-gray-200 p-4'>
//             <div className='flex justify-between gap-4'>
//               <label
//                 htmlFor='FilterPriceFrom'
//                 className='flex items-center gap-2'
//               >
//                 <span className='text-sm text-gray-600'>$</span>

//                 <input
//                   type='number'
//                   id='FilterPriceFrom'
//                   placeholder='From'
//                   className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
//                 />
//               </label>

//               <label
//                 htmlFor='FilterPriceTo'
//                 className='flex items-center gap-2'
//               >
//                 <span className='text-sm text-gray-600'>$</span>

//                 <input
//                   type='number'
//                   id='FilterPriceTo'
//                   placeholder='To'
//                   className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
//                 />
//               </label>
//             </div>
//           </div>
//         </div>
//       </details>
//     </div>
//   );
// };

// export default Filter2;

const Filter1 = () => {
  const [showFilters, setShowfilters] = useState(true);
  const [check, setCheck] = useState({
    leather: false,
    cotton: false,
    fabric: false,
    crocodile: false,
    wool: false,
    large: false,
    medium: false,
    small: false,
    mini: false,
    luxesignatire: false,
    luxelondon: false,
  });

  const {
    leather,
    cotton,
    fabric,
    crocodile,
    wool,
    large,
    medium,
    small,
    mini,
  } = check;

  const changeHandler = (e) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className=''>
      <div
        id='filterSection'
        className={
          'md:py-10 lg:px-5   bg-gray-50 w-full ' +
          (showFilters ? 'block' : 'hidden')
        }
      >
        {/* Material Section */}
        <div>
          <div className=' flex space-x-2'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16Z'
                stroke='#1F2937'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M19 10H12C10.8954 10 10 10.8954 10 12V19C10 20.1046 10.8954 21 12 21H19C20.1046 21 21 20.1046 21 19V12C21 10.8954 20.1046 10 19 10Z'
                stroke='#1F2937'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <p className=' lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 '>
              Material
            </p>
          </div>
          <div className=' md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap'>
            <div className=' flex space-x-2 md:justify-center md:items-center items-center justify-start'>
              <input
                className='w-4 h-4 mr-2'
                type='checkbox'
                id='Leather'
                name='leather'
                value='Leather'
                checked={leather}
                onChange={changeHandler}
              />
              <div className=' inline-block'>
                <div className=' flex space-x-6 justify-center items-center'>
                  <label
                    className=' mr-2 text-sm leading-3 font-normal text-gray-600'
                    htmlFor='Leather'
                  >
                    Leather
                  </label>
                </div>
              </div>
            </div>
            <div className=' flex justify-center items-center'>
              <input
                className='w-4 h-4 mr-2'
                type='checkbox'
                id='Cotton'
                name='cotton'
                value='Cotton'
                checked={cotton}
                onChange={changeHandler}
              />
              <div className=' inline-block'>
                <div className=' flex space-x-6 justify-center items-center'>
                  <label
                    className=' mr-2 text-sm leading-3 font-normal text-gray-600'
                    htmlFor='Cotton'
                  >
                    Cotton
                  </label>
                </div>
              </div>
            </div>
            <div className=' flex space-x-2 md:justify-center md:items-center items-center justify-end'>
              <input
                className='w-4 h-4 mr-2'
                type='checkbox'
                id='Fabric'
                name='fabric'
                value='Fabric'
                checked={fabric}
                onChange={changeHandler}
              />
              <div className=' inline-block'>
                <div className=' flex space-x-6 justify-center items-center'>
                  <label
                    className=' mr-2 text-sm leading-3 font-normal text-gray-600'
                    htmlFor='Fabric'
                  >
                    Fabric
                  </label>
                </div>
              </div>
            </div>
            <div className=' flex space-x-2 md:justify-center md:items-center items-center justify-start'>
              <input
                className='w-4 h-4 mr-2'
                type='checkbox'
                id='Crocodile'
                name='crocodile'
                value='Crocodile'
                checked={crocodile}
                onChange={changeHandler}
              />
              <div className=' inline-block'>
                <div className=' flex space-x-6 justify-center items-center'>
                  <label
                    className=' mr-2 text-sm leading-3 font-normal text-gray-600'
                    htmlFor='Crocodile'
                  >
                    Crocodile
                  </label>
                </div>
              </div>
            </div>
            <div className=' flex justify-center items-center'>
              <input
                className='w-4 h-4 mr-2'
                type='checkbox'
                id='Wool'
                name='wool'
                value='Wool'
                checked={wool}
                onChange={changeHandler}
              />
              <div className=' inline-block'>
                <div className=' flex space-x-6 justify-center items-center'>
                  <label
                    className=' mr-2 text-sm leading-3 font-normal text-gray-600'
                    htmlFor='Wool'
                  >
                    Wool
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className=' bg-gray-200 lg:w-6/12 w-full md:my-10 my-8' />

        {/* Size Section */}
        <div>
          <div className=' flex space-x-2'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3 5H14'
                stroke='#1F2937'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12 7L14 5L12 3'
                stroke='#1F2937'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M5 3L3 5L5 7'
                stroke='#1F2937'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M19 10V21'
                stroke='#1F2937'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M17 19L19 21L21 19'
                stroke='#1F2937'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M21 12L19 10L17 12'
                stroke='#1F2937'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12 10H5C3.89543 10 3 10.8954 3 12V19C3 20.1046 3.89543 21 5 21H12C13.1046 21 14 20.1046 14 19V12C14 10.8954 13.1046 10 12 10Z'
                stroke='#1F2937'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <p className='  lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 '>
              Size
            </p>
          </div>
          <div className=' md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap'>
            <div className=' flex md:justify-center md:items-center items-center justify-start '>
              <input
                className='w-4 h-4 mr-2'
                type='checkbox'
                id='Large'
                name='large'
                value='Large'
                checked={large}
                onChange={changeHandler}
              />
              <div className=' inline-block'>
                <div className=' flex space-x-6 justify-center items-center'>
                  <label
                    className=' mr-2 text-sm leading-3 font-normal text-gray-600'
                    htmlFor='Large'
                  >
                    Large
                  </label>
                </div>
              </div>
            </div>
            <div className=' flex justify-center items-center '>
              <input
                className='w-4 h-4 mr-2'
                type='checkbox'
                id='Medium'
                name='medium'
                value='Medium'
                checked={medium}
                onChange={changeHandler}
              />
              <div className=' inline-block'>
                <div className=' flex space-x-6 justify-center items-center'>
                  <label
                    className=' mr-2 text-sm leading-3 font-normal text-gray-600'
                    htmlFor='Medium'
                  >
                    Medium
                  </label>
                </div>
              </div>
            </div>
            <div className=' flex md:justify-center md:items-center items-center justify-end '>
              <input
                className='w-4 h-4 mr-2'
                type='checkbox'
                id='Small'
                name='small'
                value='Small'
                checked={small}
                onChange={changeHandler}
              />
              <div className=' inline-block'>
                <div className=' flex space-x-6 justify-center items-center'>
                  <label
                    className=' mr-2 text-sm leading-3 font-normal text-gray-600'
                    htmlFor='Small'
                  >
                    Small
                  </label>
                </div>
              </div>
            </div>
            <div className=' flex md:justify-center md:items-center items-center justify-start '>
              <input
                className='w-4 h-4 mr-2'
                type='checkbox'
                id='Mini'
                name='mini'
                value='Mini'
                checked={mini}
                onChange={changeHandler}
              />
              <div className=' inline-block'>
                <div className=' flex space-x-6 justify-center items-center'>
                  <label
                    className=' mr-2 text-sm leading-3 font-normal text-gray-600'
                    htmlFor='Mini'
                  >
                    Mini
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collection Section */}
      </div>
    </div>
  );
};

export default Filter1;
