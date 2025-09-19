// src/components/LoadingPage.jsx
import React from "react";

export default function LoadingPage({ visible }) {
  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm flex items-center justify-center bg-gradient-to-br from-[var(--ks-brown)] via-[var(--ks-yellow)] to-[var(--ks-brown)] text-white transition-all duration-700 z-50 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-8 animate-fadeInUp">
        {/* Spinner */}
        <div className="relative animate-pulse-custom">
          <div className="w-24 h-24 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          <div className="w-20 h-20 border-4 border-white/20 border-b-white rounded-full animate-spin absolute top-2 left-2" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold animate-bounce-custom">
            🍴
          </span>
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="text-2xl font-bold mb-2 animate-pulse-custom">كرم الشام</p>
          <p className="text-lg font-semibold animate-pulse">جاري التحميل ...</p>
          <div className="flex justify-center gap-1 mt-4">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
