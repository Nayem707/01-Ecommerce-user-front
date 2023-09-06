import ProductsHeading from '../../components/products/ProductsHeading';
import Filter1 from '../../components/products/Filter';
import { useSelector } from 'react-redux';
import Card2 from '../../components/products/Card2';

const ProductsView = () => {
  const { products, isLoading } = useSelector((store) => store.products);
  return (
    <div className=' col-span-2 flex '>
      <div className=' w-60 h-screen '>
        <Filter1 />
      </div>
      <div className='w-full pt-10 px-4 divide-y-2 divide-zinc-700'>
        <ProductsHeading />

        {/* Card Example */}
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8'>
          <div className='grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
            {isLoading && <h1 className=' text-xl font-bold'>Loading...</h1>}
            {products.map((item) => {
              return <Card2 key={item.id} item={item} />;
            })}
          </div>
        </div>
        {/* Card Example */}
      </div>
    </div>
  );
};

export default ProductsView;
