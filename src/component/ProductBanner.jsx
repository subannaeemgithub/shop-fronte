import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiHeart, FiEye, FiShoppingBag } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { showdata } from '../frontApi/Api';
import { features } from './Topoffers';

const ProductBanner = ({ banner: propBanner, products, product, loading }) => {
  const navigate = useNavigate();
  const [internalBanner, setInternalBanner] = useState(null);

  useEffect(() => {
    if (!propBanner) {
      showdata()
        .then((res) => {
          if (res?.data && res.data.length > 0) {
            setInternalBanner(res.data[0]);
          }
        })
        .catch((e) => console.log('Banner fetch error:', e));
    }
  }, [propBanner]);

  const banner = propBanner || internalBanner;
  const items = Array.isArray(products)
    ? products
    : products
    ? [products]
    : product
    ? [product]
    : [];

  const goproduct = () => {
    navigate('/30product');
  };

  return (
    <div className="mx-auto w-full max-w-[1320px] px-4 py-6 font-sans sm:px-6">
      {/* ===================== 1. Upper Centered Banner ===================== */}
      <div className="group relative min-h-[290px] overflow-hidden rounded-2xl bg-[#EDF2EE] sm:min-h-[340px] lg:min-h-[380px]">
        {/* Soft background glow */}
        <span className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#00B207]/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />
        <span className="pointer-events-none absolute -bottom-20 right-1/4 h-56 w-56 rounded-full bg-[#00B207]/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

        {/* Image on Right */}
        {banner?.image && (
          <img
            src={banner.image}
            alt={banner.title || 'Fresh organic food'}
            className="pointer-events-none absolute bottom-0 right-0 h-[75%] sm:h-[85%] lg:h-[90%] w-auto max-w-[48%] sm:max-w-[50%] object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}

        {/* Content on Left */}
        <div className="relative z-10 flex h-full min-h-[290px] w-full max-w-[55%] sm:max-w-[52%] lg:max-w-[50%] flex-col justify-center gap-2 sm:gap-3 p-4 sm:p-7 lg:p-9 sm:min-h-[340px] lg:min-h-[380px]">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#00B207]">
            Welcome to shopery
          </span>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 line-clamp-2">
            {banner?.title || banner?.subtitle || 'Fresh & Healthy Organic Food'}
          </h2>

          <div className="flex items-stretch gap-2 sm:gap-2.5">
            <span className="w-px bg-gray-300 shrink-0" />
            <div className="space-y-0.5 sm:space-y-1">
              <p className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-700">
                Sale up to
                <span className="rounded-md bg-[#FF8A00] px-2 py-0.5 text-xs sm:text-sm font-semibold uppercase text-white transition-transform duration-300 group-hover:scale-110">
                  30% OFF
                </span>
              </p>
              <p className="text-[11px] sm:text-xs text-gray-500">
                {banner?.description || 'Free shipping on all your order. we deliver, you enjoy'}
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={goproduct}
            className="group/btn relative mt-1 flex w-fit items-center gap-2 overflow-hidden rounded-full bg-[#00B207] px-5 sm:px-7 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#009a06] hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
          >
            <span>Shop now</span>
            <FiArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
          </button>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00B207]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#00B207]/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#00B207]/30" />
        </div>
      </div>

      {/* ===================== 2. Delivery 4 Points Section (Floating under banner) ===================== */}
      <div className="relative z-20 mx-2 -mt-5 sm:-mt-6 sm:mx-6 rounded-xl bg-white p-3.5 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 mb-12">
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
          <div className="mt-2.5 mb-8 flex items-center justify-center gap-1">
            <span className="h-0.5 w-6 rounded-full bg-[#00B207]/30" />
            <span className="h-0.5 w-10 rounded-full bg-[#00B207]" />
            <span className="h-0.5 w-6 rounded-full bg-[#00B207]/30" />
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="py-12 text-center text-sm text-gray-500">
            Loading products...
          </div>
        ) : items.length === 0 ? (
          <div className="py-12 text-center text-sm text-gray-400">
            No featured products available yet. Add products to display them here!
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-5">
            {items.map((item, index) => (
              <div
                key={item._id || index}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-gray-100 bg-white p-3.5 transition-all duration-300 hover:border-[#00B207] hover:shadow-lg hover:shadow-gray-100"
              >
                {/* Floating Action Buttons on Hover (Top Right) */}
                <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    type="button"
                    title="Add to Wishlist"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-600 shadow-sm transition-colors hover:bg-[#00B207] hover:text-white"
                  >
                    <FiHeart className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    title="Quick View"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-600 shadow-sm transition-colors hover:bg-[#00B207] hover:text-white"
                  >
                    <FiEye className="h-4 w-4" />
                  </button>
                </div>

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
                    {item.name}
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
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all duration-300 group-hover:bg-[#00B207] group-hover:text-white active:scale-95"
                    >
                      <FiShoppingBag className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductBanner;
