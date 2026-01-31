"use client"; // Butonların çalışması için şart
import data from "./data.json";

import ProductItem from "../components/ProductItem";

export default function Home() {
  const addToCart = (product) => {
    console.log("Sepete eklendi:", product.name);
  };

  return (
    <main className="min-h-screen bg-rose-50 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-rose-900 mb-8">Desserts</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((product, index) => (
            <ProductItem key={index} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </main>
  );
}
