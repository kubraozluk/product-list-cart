export default function ProductItem({
  product,
  quantity,
  addToCart,
  removeFromCart,
}) {
  
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

        {/* Buton Alanı */}
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
          {quantity > 0 ? (
            // DURUM 2: Sepette Varsa (Kırmızı + - Butonu)
            <div className="bg-red flex items-center justify-between w-40 px-4 py-3 rounded-full text-white shadow-md">
              <button
                onClick={() => removeFromCart(product)}
                className="w-5 h-5 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-red transition"
              >
                {/* Eksi İkonu */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  fill="none"
                  viewBox="0 0 10 2"
                >
                  <path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
                </svg>
              </button>

              <span className="font-semibold">{quantity}</span>

              <button
                onClick={() => addToCart(product)}
                className="w-5 h-5 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-red transition"
              >
                {/* Artı İkonu */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    fill="currentColor"
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                  />
                </svg>
              </button>
            </div>
          ) : (
            // DURUM 1: Sepette Yoksa (Beyaz Ekle Butonu)
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
