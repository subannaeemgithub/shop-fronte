import React from 'react';
import Topoffers from '../component/Topoffers';
import Vagesfront from '../component/Vagesfront';
import Frutefront from '../component/Frutefront';
import Groceryfront from '../component/Groceryfront';
import Footer from '../component/Footer';

export const Home = ({
  banner,
  products = [],
  frutban,
  frutprod = [],
  groceryban,
  groceryprod = [],
}) => {
  return (
    <>
      <Topoffers banner={banner} frutban={frutban} groceryban={groceryban} />
      <Vagesfront products={products} />
      <Frutefront frutprod={frutprod} />
      <Groceryfront groceryprod={groceryprod} />
      <Footer />
    </>
  );
};
