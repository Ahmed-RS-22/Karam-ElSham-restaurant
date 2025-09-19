import React, { useState } from "react";
import menu1 from "../assets/menu-1.webp";
import menu2 from "../assets/menu-2.webp";
import menu3 from "../assets/menu-3.jpg";

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [menu1, menu2,menu3];

  return (
    <div className="container mx-auto md:px-10 px-4 py-12">
      {/* 🟡 العنوان */}
      <h1 className="text-3xl md:text-4xl font-cairo font-bold mb-8 text-center text-[var(--ks-brown)]">
        عن كرم الشام
      </h1>

      {/* 🟡 الوصف */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className=" leading-relaxed sm:text-lg text-[var(--ks-yellow)]">
          كرم الشام يقدم أصول المطبخ الشامي الأصيل مع لمسة عصرية. نختار أفضل
          المكونات ونقدم أطباقنا بحب لضمان تجربة مميزة لعملائنا.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700 sm:text-lg">
          <li>✅ وصفات منزلية أصلية</li>
          <li>✅ مكونات طازجة يومياً</li>
          <li>✅ خدمة توصيل سريعة</li>
        </ul>
      </div>
      <p className="text-2xl text-center  my-10" >يمكنك رؤية قائمة الوجبات من هنا ⬇️</p>
      <div className="flex justify-center gap-4 flex-wrap">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(img)}
            className="w-28 h-28 rounded-lg overflow-hidden shadow hover:scale-105 transition"
          >
            <img
              src={img}
              alt={`menu-${idx}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* 🟡 Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 backdrop-blur-[3px] bg-[var(--ks-cream)]/20 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full p-4">
            {/* الصورة بالحجم الكامل */}
            <img
              src={selectedImage}
              alt="menu-full"
              className="w-full rounded-lg shadow-lg"
            />
            {/* زر الإغلاق */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 text-[var(--ks-yellow)] cursor-pointer sm:-right-5 bg-[var(--ks-brown)] rounded-full p-2 size-8 flex justify-center items-center font-bold  text-xl shadow hover:text-[var(--ks-brown)] hover:bg-[var(--ks-yellow)]"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
