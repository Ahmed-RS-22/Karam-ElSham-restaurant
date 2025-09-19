import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/slices/cartSlice";
import Hero from "../components/Hero";

export default function Home() {
  const dispatch = useDispatch();

  // عروض خاصة كـ data
const specials = [
  {
    id: 40,
    name: "عرض العائلة",
    desc: "بوكس الأصحاب - تشكيلة شاورما ووجبات.",
    image: "/menu/family-combo.png", // بدل import
    price: 300,
  },
  {
    id: 41,
    name: "عرض الملوك",
    desc: "تشكيلة وجبات شاورما",
    image: "/menu/منيو-عروض-كرم-الشام.jpg.webp",
    price: 450,
  },
  {
    id: 42,
    name: "وجبة اليوم",
    desc: "صنية الحريفة - تشكيلة مشويات",
    image: "/menu/sp-3.png",
    price: 200,
  },
];


  return (
    <div>
      <Hero />
      <section className="container mx-auto px-4 py-12 scroll-reveal">
        <h2 className="text-3xl font-cairo font-bold mb-10 text-center text-[var(--ks-brown)] animate-fadeInUp gradient-text">
          عروضنا المميزة
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-10 animate-fadeInUp stagger-2">
          {specials.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white hover:-translate-y-2 hover:shadow-[var(--shadow-1)] rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-500 hover:scale-105 hover-glow animate-scaleIn stagger-${index + 1} group`}
            >
              <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-1 text-center">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--ks-yellow)] transition-colors duration-300">{item.name}</h3>
                <p className="text-gray-600 text-sm flex-1 group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>
                <p className="text-lg font-bold text-[var(--ks-brown)] mt-2 animate-pulse-custom">
                  {item.price} ج.م
                </p>
                <button
                  onClick={() =>
                    dispatch(addToCart({ ...item, qty: 1 }))
                  }
                  className="bg-[var(--ks-yellow)] text-[var(--ks-brown)] font-semibold px-4 py-2 rounded-lg mt-6 transition-all duration-300 hover:bg-[var(--ks-brown)] hover:text-[var(--ks-yellow)] hover:scale-105 btn-animated transform active:scale-95"
                >
                  اطلب الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
