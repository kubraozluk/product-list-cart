import React from "react";

export default function Cart({ cart, removeFromCart, confirmOrder }) {
  // 1. Toplam Ürün Sayısını Hesapla (Sepette kaç parça var?)
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // 2. Toplam Parayı Hesapla (Hepsini topla)
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm h-fit sticky top-8">
      <h2 className="text-2xl font-bold text-red mb-6">
        Your Cart ({totalQuantity})
      </h2>

      {cart.length === 0 ? (
        // DURUM 1: Sepet BOŞSA (Üzgün pasta resmi)
        <div className="flex flex-col items-center py-8">
          <img
            src="/assets/images/illustration-empty-cart.svg"
            alt="Empty Cart"
          />
          <p className="text-rose-500 font-semibold mt-4 text-sm">
            Your added items will appear here
          </p>
        </div>
      ) : (
        // DURUM 2: Sepet DOLUYSA (Liste ve Toplam Tutar)
        <>
          <div className="space-y-4 max-h-[400px] overflow-auto pr-2">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-rose-100 pb-4"
              >
                <div>
                  <h4 className="font-semibold text-rose-900 mb-1">
                    {item.name}
                  </h4>
                  <div className="text-sm">
                    <span className="text-red font-semibold mr-2">
                      {item.quantity}x
                    </span>
                    <span className="text-rose-400">
                      @ ${item.price.toFixed(2)}
                    </span>
                    <span className="text-rose-500 font-semibold ml-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                {/* Çarpı (X) Butonu: Ürünü tamamen siler */}
                <button
                  onClick={() => removeFromCart(item)}
                  className="w-5 h-5 rounded-full border border-rose-300 text-rose-300 hover:text-rose-900 hover:border-rose-900 flex items-center justify-center transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                  >
                    <path
                      fill="currentColor"
                      d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* En Alt Kısım: Toplam Tutar ve Sipariş Butonu */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-rose-900 text-sm">Order Total</span>
              <span className="text-2xl font-bold text-rose-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg flex items-center justify-center gap-2 mb-6">
              <img
                src="/assets/images/icon-carbon-neutral.svg"
                alt="carbon-neutral"
              />
              <p className="text-sm text-rose-900">
                This is a <span className="font-semibold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>

            <button
              onClick={confirmOrder}
              className="w-full bg-red text-white py-4 rounded-full font-semibold hover:bg-rose-900 transition"
            >
              Confirm Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
