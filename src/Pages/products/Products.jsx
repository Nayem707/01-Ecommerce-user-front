import React, { useEffect } from 'react';
import ProductsHeading from '../../components/products/ProductsHeading';
import Filter1 from '../../components/products/Filter';

import { useDispatch } from 'react-redux';
import { getCartItems } from '../../features/Cart/cartURL';

const ProductsView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <div className='bg-white relative '>
      <div className=' col-span-2 flex '>
        <div className='p-2 pt-10 w-60 h-screen '>
          <Filter1 />
        </div>
        <div className='w-full pt-10 px-4 divide-y-2 divide-zinc-700'>
          <div className='px-10 text-3xl mb-5'>
            <ProductsHeading />
          </div>
          <div className=' mx-auto flex items-center pt-5'>
            {/* <Card2 item={product} /> */}
          </div>

          {/* <div className=' p-10'>
            <SliderCommon slidesToShow={4} arrowsScroll={2}>
              {products.map((card) => {
                return (
                  <>
                    <div className='m-1 shadow-md'>
                      <Card item={card} key={card.id} />
                    </div>
                  </>
                );
              })}
            </SliderCommon>
          </div> */}
          {/* <ProductCard3 item={product} /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
