import ProductsHeading from '../../components/products/ProductsHeading';
import Filter1 from '../../components/products/Filter';
import { useSelector } from 'react-redux';
import Card2 from '../../components/products/Card2';

const ProductsView = () => {
  const { cartItems, isLoading } = useSelector((store) => store.cart);

  return (
    <div className='bg-white  '>
      <div className=' col-span-2 flex '>
        <div className=' w-60 h-screen '>
          <Filter1 />
        </div>
        <div className='w-full pt-10 px-4 divide-y-2 divide-zinc-700'>
          <ProductsHeading />
          <div className=' flex pt-5 gap-2'>
            {/* Card Example */}
            {isLoading && (
              <h2 className=' mx-auto items-center justify-center text-center p-5 text-2xl'>
                Loading...
              </h2>
            )}

            {cartItems.map((item) => {
              return <Card2 key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
