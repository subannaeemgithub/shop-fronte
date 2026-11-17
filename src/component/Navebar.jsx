import { FiSearch, FiMenu, FiX, FiHeart, FiShoppingBag, FiPhoneCall, FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";

const menuItems = [
  { label: "Home", dropdown: true },
  { label: "Shop", dropdown: true },
  { label: "Pages", dropdown: true },
  { label: "Blog", dropdown: true },
  { label: "About Us", dropdown: false },
  { label: "Contact Us", dropdown: false },
];

export function Navebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const gophome = () => {
    navigate('/');
  };

  return (
    <header className="w-full bg-white font-sans">
      {/* ===== Logo Line (Middle bar) ===== */}
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-3 sm:px-6">
        {/* Logo */}
        <div className="flex cursor-pointer items-center gap-2 transition-transform duration-300 hover:scale-105">
          <FaSeedling className="h-9 w-9 text-[#00B207]" />
          <span
            onClick={gophome}
            className="text-[32px] font-medium leading-none text-[#002603]"
          >
            Ecobazar
          </span>
        </div>

        {/* Search */}
        <div className="order-last flex w-full overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 focus-within:border-[#00B207] focus-within:shadow-[0_0_0_3px_rgba(0,178,7,0.15)] md:order-none md:w-[451px]">
          <div className="flex flex-1 items-center gap-2 px-4 text-gray-500">
            <FiSearch className="h-5 w-5 shrink-0" />
            <input
              type="text"
              placeholder="Search"
              className="h-[46px] w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500"
            />
          </div>
          <button className="group relative overflow-hidden bg-[#00B207] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#009a06] hover:shadow-lg active:scale-95 sm:px-9">
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            <span className="relative">Search</span>
          </button>
        </div>

        {/* Right side: Wishlist + Cart + Sign In / Sign Up */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="text-gray-800 transition-all duration-300 hover:scale-110 hover:text-[#00B207] active:scale-95">
            <FiHeart className="h-7 w-7" />
          </button>

          <span className="hidden h-7 w-px bg-gray-200 sm:block" />

          <button className="group flex items-center gap-3 text-left">
            <div className="relative text-gray-800 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-[#00B207] group-active:scale-95">
              <FiShoppingBag className="h-7 w-7" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#2C742F] text-[10px] font-medium text-white">
                2
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] text-gray-500">Shopping cart:</span>
              <span className="text-sm font-medium text-gray-900 transition-colors duration-300 group-hover:text-[#00B207]">
                $57.00
              </span>
            </div>
          </button>

          <span className="hidden h-7 w-px bg-gray-200 sm:block" />

          {/* Sign In / Sign Up shifted to the very right end of the logo line */}
          <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
            <span className="cursor-pointer transition-colors duration-300 hover:text-[#00B207]">
              Sign In
            </span>
            <span className="text-gray-400">/</span>
            <span className="cursor-pointer transition-colors duration-300 hover:text-[#00B207]">
              Sign Up
            </span>
          </div>
        </div>
      </div>

      {/* ===== Bottom nav bar ===== */}
      <nav className="bg-[#333333]">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 sm:px-6">
          {/* Desktop menu */}
          <ul className="hidden items-center gap-8 lg:flex">
            {menuItems.map((item, i) => (
              <li
                key={item.label}
                className={`group relative flex cursor-pointer items-center gap-1 py-4 text-sm transition-colors duration-300 ${
                  i === 0 ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <FiChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                )}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] bg-[#00B207] transition-all duration-300 ${
                    i === 0 ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Menu button (small screens only) */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="group flex items-center gap-2 py-3 text-white transition-all duration-300 hover:text-[#00B207] active:scale-95 lg:hidden"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 transition-all duration-300 group-hover:border-[#00B207] group-hover:bg-[#00B207]/10">
              {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </span>
            <span className="text-sm font-medium">Menu</span>
          </button>

          {/* Phone */}
          <div className="group flex cursor-pointer items-center gap-2 py-4 text-white transition-colors duration-300 hover:text-[#00B207]">
            <FiPhoneCall className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-sm font-medium sm:text-base">(219) 555-0114</span>
          </div>
        </div>

        {/* Mobile menu (slides down) */}
        <div
          className={`overflow-hidden bg-[#2a2a2a] transition-all duration-500 lg:hidden ${
            open ? "max-h-[500px] border-t border-white/10" : "max-h-0"
          }`}
        >
          <ul className="mx-auto flex max-w-[1320px] flex-col px-4 py-2 sm:px-6">
            {menuItems.map((item, i) => (
              <li
                key={item.label}
                className={`flex cursor-pointer items-center justify-between rounded-md px-3 py-3 text-sm transition-all duration-300 hover:bg-white/10 hover:pl-5 hover:text-[#00B207] ${
                  i === 0 ? "text-white" : "text-gray-400"
                }`}
              >
                {item.label}
                {item.dropdown && <FiChevronDown className="h-4 w-4" />}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
