import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductData } from '../../features/ProductsData/ProductDataSlice';

function RTKDataComponent() {
  const product = useSelector((state) => console.log(state.product));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <div>
      <h1>RTK Data</h1>
    </div>
  );
}

export default RTKDataComponent;
