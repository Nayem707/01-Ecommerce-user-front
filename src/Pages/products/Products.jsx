import React, { useEffect } from 'react';
import ProductsHeading from '../../components/products/ProductsHeading';
import Card from '../../components/products/Card';
import SliderCommon from '../../components/common/SliderCommon';
import Filter1 from '../../components/products/Filter';
import Card2 from '../../components/products/Card2';
import ProductCard3 from '../../components/products/ProductCard3';
import { fetchProductData } from '../../features/ProductsData/ProductDataSlice';
import { useDispatch, useSelector } from 'react-redux';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
];

const ProductsView = () => {
  const product = useSelector((state) => state.product.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <>
      <div className='bg-white relative '>
        <div className=' col-span-2 flex '>
          <div className='p-2 pt-10 w-60 h-screen '>
            <Filter1 />
          </div>
          <div className='w-full pt-10 px-4 divide-y-2 divide-zinc-700'>
            <div className='px-10 text-3xl mb-5'>
              <ProductsHeading />
            </div>
            <div className='p-10'>
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
            </div>

            <div className=' mx-auto flex items-center pt-5'>
              <Card2 item={product} />
            </div>
            <ProductCard3 item={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsView;
