import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, X, ShoppingCart } from "lucide-react"; 
import logo from "../assets/logo.webp";

export default function Navbar() {
  const cart = useSelector((state) => state.cart.cart);
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "الرئيسية" },
    { to: "/menu", label: "القائمة" },
    { to: "/about", label: "من نحن" },
    { to: "/contact", label: "  تواصل معنا" },
  ];

  return (
    <header className="bg-[var(--ks-brown)] text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm border-b border-[var(--ks-yellow)]/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 animate-fadeInLeft">
          <img src={logo} alt="كرم الشام" className="h-10 md:h-12 rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-lg" />
          <NavLink
            to="/"
            className="text-lg md:text-xl font-cairo font-bold text-[var(--ks-yellow)] hover:scale-105 transition-transform duration-300"
          >
            كرم الشام
          </NavLink>
        </div>

        <nav className="hidden md:flex justify-center flex-1 items-center gap-6 font-['cairo'] animate-fadeInUp">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => {
                const baseClasses = `transition-all duration-300 hover:text-[var(--ks-yellow)] hover:scale-105 relative px-2 py-1 rounded-lg hover:bg-white/10 animate-fadeInUp stagger-${index + 1}`;
                return isActive 
                  ? `${baseClasses} text-[var(--ks-yellow)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[var(--ks-yellow)] after:rounded-full` 
                  : baseClasses;
              }}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/cart"
            className="relative flex items-center gap-1 hover:text-[var(--ks-yellow)] transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10 animate-fadeInUp stagger-5"
          >
            <ShoppingCart className="w-5 h-5 animate-bounce-custom" />
            <span>سلة</span>
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-3 bg-[var(--ks-yellow)] text-ks-brown rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold shadow-md animate-pulse-custom hover:scale-110 transition-transform duration-300">
                {totalQty}
              </span>
            )}
          </NavLink>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[var(--ks-yellow)] hover:scale-110 transition-transform duration-300 p-2 rounded-lg hover:bg-white/10"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu with slide animation */}
      <div className={`md:hidden bg-[var(--ks-brown)] border-t border-white/20 font-['cairo'] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => {
                  const baseClasses = `transition-all duration-300 hover:text-[var(--ks-yellow)] hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10 animate-fadeInLeft stagger-${index + 1}`;
                  return isActive 
                    ? `${baseClasses} text-[var(--ks-yellow)] bg-white/10` 
                    : baseClasses;
                }}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="relative flex items-center gap-2 hover:text-[var(--ks-yellow)] transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10 animate-fadeInLeft stagger-5"
            >
              <ShoppingCart className="w-5 h-5 animate-bounce-custom" />
              <span> سلة المشتريات</span>
              {totalQty > 0 && (
                <span className="bg-[var(--ks-yellow)] text-ks-brown rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold animate-pulse-custom">
                  {totalQty}
                </span>
              )}
            </NavLink>
          </nav>
      </div>
    </header>
  );
}
