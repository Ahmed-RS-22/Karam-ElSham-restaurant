// src/components/LoadingPage.jsx
import React from "react";

export default function LoadingPage({ visible }) {
  return (
    <div
      className={`fixed inset-0  backdrop-blur-sm flex items-center justify-center bg-gradient-to-br from-ks-brown to-ks-yellow text-white transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-[var(--ks-brown)]/30 border-t-white rounded-full animate-spin"></div>
          <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
            🍴
          </span>
        </div>

        {/* Text */}
        <p className="text-xl font-semibold animate-pulse">جاري التحميل ...</p>
      </div>
    </div>
  );
}
