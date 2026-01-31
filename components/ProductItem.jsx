// Not: En üstteki "import React" satırını da sildik, Next.js'te gerek yoktur.

export default function ProductItem({ product, addToCart }) {
  // quantity: Bu ürün sepette kaç tane var? (Şimdilik 0 diyoruz, sonra bağlayacağız)
  const quantity = 0;

  return (
    <div>
      {/* Resim Alanı */}
      <div className="relative">
        <img
          src={product.image.desktop}
          alt={product.name}
          className={`w-full rounded-xl mb-4 transition-all ${
            quantity > 0 ? "border-2 border-red" : "border border-transparent"
          }`}
        />

        {/* --- BUTON ALANI --- */}
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
          {quantity > 0 ? (
            // DURUM 2: Ürün Sepette Varsa (Kırmızı + - butonu)
            <div className="bg-red flex items-center justify-between w-40 px-4 py-3 rounded-full text-white shadow-md">
              <button className="w-5 h-5 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-red transition">
                -
              </button>
              <span className="font-semibold">{quantity}</span>
              <button className="w-5 h-5 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-red transition">
                +
              </button>
            </div>
          ) : (
            // DURUM 1: Ürün Sepette Yoksa (Beyaz Sepete Ekle butonu)
            <button
              onClick={() => addToCart(product)}
              className="bg-white border border-rose-300 rounded-full px-8 py-3 flex items-center gap-3 hover:border-red hover:text-red transition shadow-sm min-w-[160px]"
            >
              <img src="/assets/images/icon-add-to-cart.svg" alt="cart" />
              <span className="font-semibold text-sm">Add to Cart</span>
            </button>
          )}
        </div>
      </div>

      {/* Yazılar */}
      <div className="mt-8">
        <p className="text-rose-500 text-sm mb-1">{product.category}</p>
        <p className="font-bold text-rose-900 text-lg mb-1">{product.name}</p>
        <p className="text-red font-semibold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
