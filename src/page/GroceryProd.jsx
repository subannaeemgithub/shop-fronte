import React from 'react';
import Groceryban from '../component/Groceryban';
import Footer from '../component/Footer';

const GroceryProd = ({ groceryban, groceryprod }) => {
  return (
    <div>
      <Groceryban groceryban={groceryban} groceryprod={groceryprod} />
      <Footer />
    </div>
  );
};

export default GroceryProd;
