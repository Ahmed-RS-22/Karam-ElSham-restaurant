import React from "react";

export default function CartItem({ item, onInc, onDec, onRemove }) {
  return (
    <div
      onClick={() => console.log(item.image)}
      className="flex sm:flex-row flex-col items-center gap-4 bg-white p-4 rounded-lg shadow"
    >
      <img
        src={item.image}
        alt={item.name}
        className="sm:w-20 sm:h-20  h-40 w-40 object-cover rounded"
      />
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm">{item.price} ج.م</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onDec(item.id)}
          className="px-2 bg-gray-200 rounded"
        >
          -
        </button>
        <span>{item.qty}</span>
        <button
          onClick={() => onInc(item.id)}
          className="px-2 bg-gray-200 rounded"
        >
          +
        </button>
      </div>
      <button
        onClick={() => onRemove(item.name)}
        className="border px-4 py-2 cursor-pointer rounded-2xl active:scale-90 hover:text-white hover:bg-red-500 text-red-500"
      >
        حذف
      </button>
    </div>
  );
}
