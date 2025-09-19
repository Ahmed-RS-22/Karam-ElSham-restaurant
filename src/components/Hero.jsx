import React from "react";
import heroImg from "../assets/hero.png";
import { Link } from "react-router";
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[var(--ks-yellow)] to-[var(--ks-brown)]">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* النص */}
        <div className="text-center md:text-right">
          <h1 className="text-4xl md:text-6xl font-cairo font-bold text-white leading-tight">
            كرم الشام
          </h1>
          <p className="mt-6  md:text-xl text-white/90 max-w-md mx-auto md:mx-0 leading-relaxed">
            أشهى المأكولات الشامية والشوايات الأصيلة، نقدم لكم تجربة طعام لا تُنسى
            بأفضل جودة وأسرع خدمة.
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Link
              to="/menu"
              className="sm:px-6 py-3  px-4 sm:text-lg text-sm rounded-lg flex items-center bg-white text-[var(--ks-brown)] font-semibold shadow hover:bg-gray-100 transition"
            >
              تصفح القائمة
            </Link>
            <Link
              to="/about"
              className="sm:px-6 py-3  px-4 sm:text-lg text-sm flex items-center rounded-lg border border-white text-white font-semibold hover:bg-white/10 transition"
            >
              عن المطعم
            </Link>
          </div>
        </div>

        {/* صورة الهيرو */}
        <div className="flex justify-center md:justify-end max-w-300px">
          <img
            src={heroImg}
            alt="وجبة شامية"
            className="rounded-3xl shadow-2xl w-full md:w-[400px] lg:w-[500px] h-64 md:h-[350px] object-cover border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}
