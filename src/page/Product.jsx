import React from 'react';
import ProductBanner from '../component/ProductBanner';

export default function Product({ banner, products = [], loading }) {
  return (
    <>
      <ProductBanner banner={banner} products={products} loading={loading} />
    </>
  );
}
