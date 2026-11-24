import React from 'react';
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalCount,
    totalAmount,
    toastMessage,
  } = useCart();

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#00B207] px-6 py-2.5 text-sm font-semibold text-white shadow-xl transition-all animate-bounce">
          {toastMessage}
        </div>
      )}

      {/* Cart Drawer & Backdrop */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 transition-opacity backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 p-5">
              <div className="flex items-center gap-2">
                <FiShoppingBag className="h-5 w-5 text-[#00B207]" />
                <h3 className="text-lg font-bold text-gray-900">
                  Shopping Cart ({totalCount})
                </h3>
              </div>
              <button
                onClick={closeCart}
                className="rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center py-16">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 text-gray-300 mb-3">
                    <FiShoppingBag className="h-8 w-8" />
                  </span>
                  <p className="font-semibold text-gray-700">Your cart is empty</p>
                  <p className="text-xs text-gray-400 mt-1 max-w-xs">
                    Explore our fresh products and click on any item to add it to your cart.
                  </p>
                  <button
                    onClick={closeCart}
                    className="mt-5 rounded-full bg-[#00B207] px-6 py-2 text-xs font-semibold text-white shadow transition hover:bg-[#009806]"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 p-3 shadow-xs hover:border-gray-200"
                  >
                    {/* Thumbnail */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-50 p-1 overflow-hidden">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <span className="text-[10px] text-gray-400">No Image</span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="truncate text-sm font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        ${Number(item.price).toFixed(2)} × {item.quantity}
                      </p>

                      {/* Quantity Controls */}
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item._id, -1)}
                          className="flex h-6 w-6 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100 transition"
                        >
                          <FiMinus className="h-3 w-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-semibold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item._id, 1)}
                          className="flex h-6 w-6 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100 transition"
                        >
                          <FiPlus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    {/* Total & Remove */}
                    <div className="flex flex-col items-end justify-between self-stretch">
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="text-gray-400 transition hover:text-red-500 p-1"
                        title="Remove item"
                      >
                        <FiTrash2 className="h-4 w-4" />
                      </button>
                      <span className="text-sm font-bold text-gray-900">
                        ${(Number(item.price) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-100 bg-gray-50 p-5 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Total Items:</span>
                  <span className="font-semibold text-gray-800">{totalCount}</span>
                </div>
                <div className="flex items-center justify-between text-base">
                  <span className="font-semibold text-gray-700">Subtotal:</span>
                  <span className="text-xl font-bold text-[#00B207]">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => alert(`Order placed for ${totalCount} items ($${totalAmount.toFixed(2)})!`)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#00B207] py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#009806] active:scale-95"
                >
                  <span>Checkout Now</span>
                  <FiArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={clearCart}
                  className="w-full text-center text-xs font-medium text-gray-400 hover:text-red-500 transition"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
