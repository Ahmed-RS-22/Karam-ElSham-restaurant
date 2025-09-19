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
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-cairo font-bold mb-10 text-center text-[var(--ks-brown)]">
          عروضنا المميزة
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-10">
          {specials.map((item) => (
            <div
              key={item.id}
              className="bg-white hover:-translate-y-1 hover:shadow-[var(--shadow-1)] rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6 flex flex-col flex-1 text-center">
                <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
                <p className="text-gray-600 text-sm flex-1">{item.desc}</p>
                <p className="text-lg font-bold text-[var(--ks-brown)] mt-2">
                  {item.price} ج.م
                </p>
                <button
                  onClick={() =>
                    dispatch(addToCart({ ...item, qty: 1 }))
                  }
                  className="bg-[var(--ks-yellow)] text-[var(--ks-brown)] font-semibold px-4 py-2 rounded-lg mt-6"
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
