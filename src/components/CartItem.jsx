import React from "react";

export default function CartItem({ item, onInc, onDec, onRemove }) {
  return (
    <div
      onClick={() => console.log(item.image)}
      className="flex sm:flex-row flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-scaleIn group"
    >
      <div className="relative overflow-hidden rounded-lg">
      <img
        src={item.image}
        alt={item.name}
        className="sm:w-20 sm:h-20 h-40 w-40 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
      />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold group-hover:text-[var(--ks-yellow)] transition-colors duration-300">{item.name}</h4>
        <p className="text-sm font-bold text-[var(--ks-brown)] animate-pulse-custom">{item.price} ج.م</p>
      </div>
      <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-2">
        <button
          onClick={() => onDec(item.id)}
          className="w-8 h-8 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center font-bold transition-all duration-300 hover:scale-110 active:scale-95"
        >
          -
        </button>
        <span className="font-bold text-lg min-w-[2rem] text-center animate-pulse-custom">{item.qty}</span>
        <button
          onClick={() => onInc(item.id)}
          className="w-8 h-8 bg-green-100 hover:bg-green-200 text-green-600 rounded-full flex items-center justify-center font-bold transition-all duration-300 hover:scale-110 active:scale-95"
        >
          +
        </button>
      </div>
      <button
        onClick={() => onRemove(item.name)}
        className="border-2 border-red-500 px-4 py-2 cursor-pointer rounded-2xl transition-all duration-300 active:scale-90 hover:text-white hover:bg-red-500 text-red-500 hover:scale-105 btn-animated font-semibold"
      >
        حذف
      </button>
    </div>
  );
}
