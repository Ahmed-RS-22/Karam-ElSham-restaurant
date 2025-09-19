import React from "react";

export default function CategoryList({ categories = [], active, onChange }) {
  return (
    <div className="flex gap-2 flex-wrap  justify-center mb-6">
      <button
        onClick={() => onChange("")}
        className={`px-3 py-1 rounded-full ${!active ? 'bg-[var(--ks-brown)] text-white' : 'bg-white text-[var(--ks-brown)] shadow'}`}
      >
        الكل
      </button>
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-3 py-1 rounded-full ${active === c ? 'bg-[var(--ks-brown)] text-white' : 'bg-white text-[var(--ks-brown)] shadow'}`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
