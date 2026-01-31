"use client";
import { useState } from "react"; // 1. React'ın hafızasını (State) çağırdık
import data from "./data.json";
import ProductItem from "../components/ProductItem";

export default function Home() {
  // SEPET HAFIZASI: Başlangıçta boş bir liste []
  const [cart, setCart] = useState([]);

  // FONKSİYON 1: Sepete Ekle
  const addToCart = (product) => {
    // Bu ürün zaten sepette var mı diye bak
    const existingItem = cart.find((item) => item.name === product.name);

    if (existingItem) {
      // Varsa: Sayısını 1 artır
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      // Yoksa: Yeni ekle ve sayısını 1 yap
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // FONKSİYON 2: Sepetten Çıkar (Azalt)
  const removeFromCart = (product) => {
    const existingItem = cart.find((item) => item.name === product.name);

    if (existingItem.quantity === 1) {
      // Sayısı 1 ise tamamen listeden sil
      setCart(cart.filter((item) => item.name !== product.name));
    } else {
      // Değilse sayısını 1 azalt
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    }
  };

  return (
    <main className="min-h-screen bg-rose-50 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-rose-900 mb-8">Desserts</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((product, index) => {
            // Her ürün için: "Acaba ben sepette miyim?" kontrolü
            const cartItem = cart.find((item) => item.name === product.name);
            const quantity = cartItem ? cartItem.quantity : 0;

            return (
              <ProductItem
                key={index}
                product={product}
                quantity={quantity} // Gerçek sayıyı gönderiyoruz (Artık 0 değil!)
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
