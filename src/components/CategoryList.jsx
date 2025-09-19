import React from "react";

export default function CategoryList({ categories = [], active, onChange }) {
  return (
    <div className="flex gap-3 flex-wrap justify-center mb-6 animate-fadeInUp">
      <button
        onClick={() => onChange("")}
        className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 btn-animated ${!active ? 'bg-[var(--ks-brown)] text-white shadow-lg' : 'bg-white text-[var(--ks-brown)] shadow-md hover:shadow-lg'}`}
      >
        الكل
      </button>
      {categories.map((c, index) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 btn-animated animate-fadeInUp stagger-${(index % 5) + 1} ${active === c ? 'bg-[var(--ks-brown)] text-white shadow-lg' : 'bg-white text-[var(--ks-brown)] shadow-md hover:shadow-lg hover:bg-gray-50'}`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
