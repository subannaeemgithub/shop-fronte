import React from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiShoppingBag } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { features } from './Topoffers';
import { useCart } from '../context/CartContext';

const Groceryban = ({ groceryban, groceryprod = [] }) => {
  const { addToCart } = useCart();
  // Fallback items matching the image layout until backend data is attached
  const defaultItems = [
    { _id: '1', name: 'Banana', price: 500, image: '' },
    { _id: '2', name: 'Green Lettuce', price: 400, image: '' },
  ];

  const itemsToDisplay = groceryprod && groceryprod.length > 0 ? groceryprod : defaultItems;

  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 py-6 font-sans sm:px-6">
      {/* ===================== 1. Hero Grocery Banner ===================== */}
      <div className="relative overflow-hidden rounded-2xl bg-[#EDF2EE] px-6 py-10 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        
        {/* Left Slider Arrow */}
        <button
          type="button"
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all hover:bg-[#00B207] hover:text-white sm:left-5"
        >
          <FiChevronLeft className="h-5 w-5" />
        </button>

        {/* Right Slider Arrow */}
        <button
          type="button"
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all hover:bg-[#00B207] hover:text-white sm:right-5"
        >
          <FiChevronRight className="h-5 w-5" />
        </button>

        {/* Banner Content Grid: Text on Left, Image on Right */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Left Column: Text Information */}
          <div className="flex flex-col items-start justify-center space-y-3 pl-4 sm:space-y-4 sm:pl-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00B207] sm:text-sm">
              WELCOME TO SHOPERY
            </span>

            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-[54px]">
              {groceryban?.offername || "Use for daily life"}
            </h1>

            <div className="flex items-center gap-2 text-sm text-gray-600 sm:text-base">
              <span>Sale up to</span>
              <span className="rounded bg-[#FF8A00] px-2 py-0.5 text-xs font-bold uppercase text-white sm:text-sm">
                30% OFF
              </span>
            </div>

            <p className="text-xs text-gray-500 sm:text-sm md:text-base">
              {groceryban?.description || "Text Our fresh healthy products are very useful for health and daily life"}
            </p>

            <button
              type="button"
              className="group mt-2 flex items-center gap-2 rounded-full bg-[#00B207] px-6 py-2.5 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#009806] hover:shadow-lg active:scale-95 sm:px-8 sm:py-3.5 sm:text-sm"
            >
              <span>Shop now</span>
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: Basket Image */}
          <div className="relative flex items-center justify-center">
            <img
              src={groceryban?.image || "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=700&q=80"}
              alt={groceryban?.offername || "Grocery"}
              className="max-h-[300px] w-auto object-contain transition-transform duration-500 hover:scale-105 sm:max-h-[380px] lg:max-h-[440px]"
            />
          </div>

        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:bottom-5">
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-5 rounded-full bg-[#00B207]" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
        </div>

      </div>

      {/* ===================== 2. Delivery 4 Points Section ===================== */}
      <div className="relative z-10 mx-2 -mt-5 mb-12 rounded-xl border border-gray-100 bg-white p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:-mt-6 sm:mx-6 sm:p-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group flex cursor-pointer items-center gap-3 rounded-lg p-1.5 transition-all duration-300 hover:bg-[#00B207]/5"
            >
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#00B207]/10 text-[#00B207] transition-all duration-300 group-hover:bg-[#00B207] group-hover:text-white group-hover:shadow-md">
                <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
              </span>
              <div className="min-w-0">
                <h4 className="truncate text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#00B207]">
                  {title}
                </h4>
                <p className="text-xs text-gray-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== 3. Featured Products Section ===================== */}
      <div className="mt-8">
        {/* Centered Heading & Decorative Line */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Featured Products
          </h2>
          <div className="mb-8 mt-2.5 flex items-center justify-center gap-1">
            <span className="h-0.5 w-6 rounded-full bg-[#00B207]/30" />
            <span className="h-0.5 w-10 rounded-full bg-[#00B207]" />
            <span className="h-0.5 w-6 rounded-full bg-[#00B207]/30" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-5">
          {itemsToDisplay.map((item, index) => (
            <div
              key={item._id || index}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-gray-100 bg-white p-3.5 transition-all duration-300 hover:border-[#00B207] hover:shadow-lg hover:shadow-gray-100"
            >
              {/* Product Image */}
              <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-2">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name || 'Product'}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                    No image
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="mt-3">
                <h4 className="truncate text-sm font-normal text-gray-700 transition-colors group-hover:text-[#00B207]">
                  {item.name || 'Product'}
                </h4>

                {/* Price and Cart Button */}
                <div className="mt-1 flex items-center justify-between">
                  <div>
                    <p className="text-base font-semibold text-gray-900">
                      ${item.price}
                    </p>
                    {/* Star Ratings */}
                    <div className="mt-1 flex items-center gap-0.5 text-xs text-[#FF8A00]">
                      <FaStar className="h-3 w-3" />
                      <FaStar className="h-3 w-3" />
                      <FaStar className="h-3 w-3" />
                      <FaStar className="h-3 w-3" />
                      <FaStar className="h-3 w-3 text-gray-300" />
                    </div>
                  </div>

                  <button
                    type="button"
                    title="Add to Cart"
                    onClick={() => addToCart(item)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all duration-300 group-hover:bg-[#00B207] group-hover:text-white active:scale-95"
                  >
                    <FiShoppingBag className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Groceryban;
