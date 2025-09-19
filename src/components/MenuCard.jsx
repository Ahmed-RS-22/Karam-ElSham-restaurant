import React from "react";
import menuImg from "../assets/menu-1.webp";

export default function MenuCard({ item, onAdd, onRemove, isInCart }) {
  const imgUrl = item.image || menuImg;

  return (
    <div key={item.id} id={item.id} className="bg-white rounded-2xl shadow-md max-w-[400px] min-w-[300px] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[var(--shadow-1)] p-4 flex flex-col group hover-glow animate-scaleIn">
      <div className="relative overflow-hidden rounded-lg">
      <img
        src={imgUrl}
        alt={item.name}
        className="w-full h-64 object-cover rounded-lg mb-3 transition-transform duration-700 group-hover:scale-110"
      />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
        {isInCart && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-bounce-custom">
            في السلة ✓
          </div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-ks-brown group-hover:text-[var(--ks-yellow)] transition-colors duration-300">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-300">{item.description || ""}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-bold text-ks-brown animate-pulse-custom text-lg">{item.price} ج.م</span>

        {isInCart ? (
          <button
            onClick={() => onRemove(item.id)}
            className="bg-red-500 text-white transition-all duration-300 hover:bg-red-600 font-semibold px-6 py-3 rounded-lg hover:scale-105 btn-animated transform active:scale-95 hover:shadow-lg"
          >
            إزالة
          </button>
        ) : (
          <button
            onClick={() => onAdd(item)}
            className="bg-[var(--ks-yellow)] text-[var(--ks-brown)] transition-all duration-300 hover:text-[var(--ks-yellow)] hover:bg-[var(--ks-brown)] font-semibold px-6 py-3 rounded-lg hover:scale-105 btn-animated transform active:scale-95 hover:shadow-lg"
          >
            أضف
          </button>
        )}
      </div>
    </div>
  );
}
