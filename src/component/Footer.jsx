import React from 'react';
import { FaSeedling, FaApplePay } from 'react-icons/fa';
import { FiLock } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#191919] font-sans text-gray-400">
      <div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2">
              <FaSeedling className="h-8 w-8 text-[#00B207]" />
              <span className="text-3xl font-medium tracking-tight text-white">
                Ecobazar
              </span>
            </div>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-gray-400 sm:text-sm">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
              <a
                href="tel:2195550114"
                className="border-b-2 border-[#00B207] pb-0.5 font-medium text-white transition-colors hover:text-[#00B207]"
              >
                (219) 555-0114
              </a>
              <span className="text-gray-500">or</span>
              <a
                href="mailto:Proxy@gmail.com"
                className="border-b-2 border-[#00B207] pb-0.5 font-medium text-white transition-colors hover:text-[#00B207]"
              >
                Proxy@gmail.com
              </a>
            </div>
          </div>

          {/* Column 2: My Account */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-white">
              My Account
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 sm:text-sm">
              <li className="cursor-pointer transition-colors hover:text-white">
                My Account
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Order History
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Shoping Cart
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Wishlist
              </li>
            </ul>
          </div>

          {/* Column 3: Helps */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-white">
              Helps
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 sm:text-sm">
              <li className="cursor-pointer transition-colors hover:text-white">
                Contact
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Faqs
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Terms &amp; Condition
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Column 4: Proxy */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-white">
              Proxy
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 sm:text-sm">
              <li className="cursor-pointer transition-colors hover:text-white">
                About
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Shop
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Product
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Track Order
              </li>
            </ul>
          </div>

          {/* Column 5: Categories */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-white">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 sm:text-sm">
              <li className="cursor-pointer transition-colors hover:text-white">
                Fruit &amp; Vegetables
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Meat &amp; Fish
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Bread &amp; Bakery
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Beauty &amp; Health
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500 sm:text-sm">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {/* Apple Pay */}
            <span className="flex h-7 items-center justify-center rounded border border-gray-700 bg-[#222] px-2 text-white">
              <FaApplePay className="h-6 w-8 text-white" />
            </span>
            {/* VISA */}
            <span className="flex h-7 items-center justify-center rounded border border-gray-700 bg-white px-2.5 text-xs font-black italic tracking-wider text-[#1a1f71]">
              VISA
            </span>
            {/* Discover */}
            <span className="flex h-7 items-center justify-center rounded border border-gray-700 bg-[#222] px-2 text-[10px] font-bold tracking-wider text-[#f76b1c]">
              DISCOVER
            </span>
            {/* MasterCard */}
            <span className="flex h-7 items-center justify-center rounded border border-gray-700 bg-[#222] px-2">
              <span className="flex items-center -space-x-1">
                <span className="h-3.5 w-3.5 rounded-full bg-[#eb001b]" />
                <span className="h-3.5 w-3.5 rounded-full bg-[#f79e1b]" />
              </span>
            </span>
            {/* Secure Payment */}
            <span className="flex h-7 items-center gap-1 rounded border border-gray-700 bg-[#222] px-2 text-[9px] font-medium text-gray-300">
              <FiLock className="h-3 w-3 text-[#00B207]" />
              <span className="leading-tight">
                Secure<br />Payment
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
