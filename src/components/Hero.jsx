import React from "react";
import heroImg from "../assets/hero.png";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[var(--ks-yellow)] via-[var(--ks-brown)] to-[var(--ks-yellow)] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* النص */}
        <div className="text-center md:text-right animate-fadeInLeft">
          <h1 className="text-4xl md:text-6xl font-cairo font-bold text-white leading-tight animate-pulse-custom">
            كرم الشام
          </h1>
          <p className="mt-6 md:text-xl text-white/90 max-w-md mx-auto md:mx-0 leading-relaxed animate-fadeInUp stagger-2">
            أشهى المأكولات الشامية والشوايات الأصيلة، نقدم لكم تجربة طعام لا تُنسى
            بأفضل جودة وأسرع خدمة.
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4 animate-fadeInUp stagger-3">
            <Link
              to="/menu"
              className="sm:px-6 py-3 px-4 sm:text-lg text-sm rounded-lg flex items-center bg-white text-[var(--ks-brown)] font-semibold shadow hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg btn-animated"
            >
              تصفح القائمة
            </Link>
            <Link
              to="/about"
              className="sm:px-6 py-3 px-4 sm:text-lg text-sm flex items-center rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-[var(--ks-brown)] transition-all duration-300 hover:scale-105 btn-animated"
            >
              عن المطعم
            </Link>
          </div>
        </div>

        {/* صورة الهيرو */}
        <div className="flex justify-center md:justify-end max-w-300px animate-fadeInRight">
          <img
            src={heroImg}
            alt="وجبة شامية"
            className="rounded-3xl shadow-2xl w-full md:w-[400px] lg:w-[500px] h-64 md:h-[350px] object-cover border-4 border-white hover-lift hover-glow transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}
