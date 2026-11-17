import React from 'react';
import Topoffers from '../component/Topoffers';
import Vagesfront from '../component/Vagesfront';

export const Home = ({ banner, products = [] }) => {
  return (
    <>
      <Topoffers banner={banner} />
      <Vagesfront products={products} />
    </>
  );
};
