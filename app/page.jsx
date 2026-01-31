"use client";
import { useState } from "react";
import data from "./data.json";
import ProductItem from "../components/ProductItem";
import Cart from "../components/Cart";
import OrderConfirmedModal from "../components/OrderConfirmedModal"; // 1. Yeni pencereyi çağırdık

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false); // 2. Sipariş bitti mi durumu?

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.name === product.name);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingItem = cart.find((item) => item.name === product.name);
    if (!existingItem) return;
    if (existingItem.quantity === 1) {
      setCart(cart.filter((item) => item.name !== product.name));
    } else {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    }
  };

  const deleteFromCart = (product) => {
    setCart(cart.filter((item) => item.name !== product.name));
  };

  // 3. Siparişi Onayla (Pencereyi Aç)
  const confirmOrder = () => {
    setIsOrderConfirmed(true);
  };

  // 4. Yeni Sipariş Başlat (Her şeyi sıfırla)
  const startNewOrder = () => {
    setCart([]); // Sepeti boşalt
    setIsOrderConfirmed(false); // Pencereyi kapat
  };

  return (
    <main className="min-h-screen bg-rose-50 py-12 px-6 md:px-16 relative">
      {" "}
      {/* relative ekledik */}
      {/* 5. Eğer sipariş onaylandıysa MODAL'ı göster */}
      {isOrderConfirmed && (
        <OrderConfirmedModal cart={cart} startNewOrder={startNewOrder} />
      )}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-rose-900 mb-8">Desserts</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.map((product, index) => {
                const cartItem = cart.find(
                  (item) => item.name === product.name,
                );
                const quantity = cartItem ? cartItem.quantity : 0;
                return (
                  <ProductItem
                    key={index}
                    product={product}
                    quantity={quantity}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                  />
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            {/* confirmOrder fonksiyonunu Cart'a gönderdik */}
            <Cart
              cart={cart}
              removeFromCart={deleteFromCart}
              confirmOrder={confirmOrder}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
