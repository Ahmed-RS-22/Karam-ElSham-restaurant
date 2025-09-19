import React from "react";
import menuImg from "../assets/menu-1.webp";

export default function MenuCard({ item, onAdd, onRemove, isInCart }) {
  const imgUrl = item.image || menuImg;

  return (
    <div key={item.id} id={item.id} className="bg-white rounded-2xl shadow-md max-w-[400px] min-w-[300px] overflow-hidden transition hover:scale-[1.01] hover:-translate-y-1 hover:shadow-[var(--shadow-1)] p-4 flex flex-col">
      <img
        src={imgUrl}
        alt={item.name}
        className="w-full h-64 object-cover rounded-lg mb-3"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-ks-brown">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.description || ""}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-bold text-ks-brown">{item.price} ج.م</span>

        {isInCart ? (
          <button
            onClick={() => onRemove(item.id)}
            className="bg-red-500 text-white transition hover:bg-red-600 font-semibold px-6 py-3 rounded-lg"
          >
            إزالة
          </button>
        ) : (
          <button
            onClick={() => onAdd(item)}
            className="bg-[var(--ks-yellow)] text-[var(--ks-brown)] transition hover:text-[var(--ks-yellow)] hover:bg-[var(--ks-brown)] font-semibold px-6 py-3 rounded-lg"
          >
            أضف
          </button>
        )}
      </div>
    </div>
  );
}
