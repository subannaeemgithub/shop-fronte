import React from 'react';
import Fruteban from '../component/Fruteban';
import Footer from '../component/Footer';

export const FruteProduct = ({ frutban, frutprod }) => {
  return (
    <div>
      <Fruteban frutban={frutban} frutprod={frutprod} />
      <Footer />
    </div>
  );
};
