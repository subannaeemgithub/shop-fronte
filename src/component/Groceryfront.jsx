import React from 'react';
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Groceryfront({ groceryprod = [] }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const goGroceryProduct = () => {
    navigate('/groceryprod');
  };

  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 py-8 font-sans sm:px-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Popular Grocery Products
        </h2>

        {/* View All */}
        <div
          onClick={goGroceryProduct}
          className="group flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#00B207] transition-colors duration-300 hover:text-[#2C742F]"
        >
          View All
          <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>
      </div>

      {/* Grid: max 10 products */}
      <div className="grid grid-cols-2 border-l border-t border-gray-200 md:grid-cols-3 lg:grid-cols-5">
        {!groceryprod || groceryprod.length === 0 ? (
          <div className="col-span-2 border-b border-r border-gray-200 p-8 text-center text-sm text-gray-400 md:col-span-3 lg:col-span-5">
            No grocery products available yet.
          </div>
        ) : (
          groceryprod.slice(0, 10).map((p, index) => (
            <div
              key={p._id || index}
              className="group border-b border-r border-gray-200 bg-white p-3 transition-colors duration-300 hover:bg-gray-50"
            >
              <div className="flex h-36 items-center justify-center overflow-hidden sm:h-40">
                <img
                  src={p.image}
                  alt={p.name || 'Grocery'}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-3 flex items-end justify-between gap-2">
                <div>
                  <h3 className="text-xs text-gray-700 transition-colors group-hover:text-[#00B207] sm:text-sm">
                    {p.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-semibold text-gray-900">
                    ${p.price}
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Add to cart"
                  onClick={() => addToCart(p)}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-800 transition-colors duration-300 hover:bg-[#00B207] hover:text-white"
                >
                  <FiShoppingBag className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
