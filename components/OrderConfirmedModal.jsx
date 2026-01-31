// sadece sipariş bitince ekrena çıkan modal
import React from "react";

export default function OrderConfirmedModal({ cart, startNewOrder }) {
  // Toplam tutarı tekrar hesaplıyoruz
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    // 1. KARANLIK PERDE (Overlay): Tüm ekranı kaplar ve arkadakileri tıklanmaz yapar
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      
      {/* 2. BEYAZ KUTU (Modal): Ortadaki pencere */}
      <div className="bg-white p-8 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        
        <img src="/assets/images/icon-order-confirmed.svg" alt="Confirmed" className="mb-6 w-12" />
        
        <h2 className="text-4xl font-bold text-rose-900 mb-2">Order Confirmed</h2>
        <p className="text-rose-500 mb-8">We hope you enjoy your food!</p>

        {/* Sipariş Özeti Listesi */}
        <div className="bg-rose-50 rounded-lg p-6 mb-8">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b border-rose-100 pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
              <div className="flex gap-4">
                {/* Küçük resim (Thumbnail) */}
                <img src={item.image.thumbnail} alt={item.name} className="w-12 h-12 rounded-md" />
                
                <div className="flex flex-col justify-center">
                  <p className="font-semibold text-rose-900 text-sm truncate w-32">{item.name}</p>
                  <div className="text-sm">
                    <span className="text-red font-semibold mr-2">{item.quantity}x</span>
                    <span className="text-rose-500">@ ${item.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <p className="font-semibold text-rose-900">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}

          {/* Toplam Tutar Alanı */}
          <div className="flex justify-between items-center pt-6 mt-4 border-t border-rose-100">
            <span className="text-rose-900 text-sm">Order Total</span>
            <span className="text-2xl font-bold text-rose-900">${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* 3. SIFIRLAMA BUTONU */}
        <button 
          onClick={startNewOrder}
          className="w-full bg-red text-white py-4 rounded-full font-semibold hover:bg-rose-900 transition"
        >
          Start New Order
        </button>

      </div>
    </div>
  );
}