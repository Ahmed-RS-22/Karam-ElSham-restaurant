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
    <header className="bg-[var(--ks-brown)] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="كرم الشام" className="h-10 md:h-12 rounded-full" />
          <NavLink
            to="/"
            className="text-lg md:text-xl font-cairo font-bold text-[var(--ks-yellow)]"
          >
            كرم الشام
          </NavLink>
        </div>

        <nav className="hidden md:flex justify-center flex-1 items-center gap-6 font-['cairo']">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors hover:text-[var(--ks-yellow)] ${
                  isActive ? "text-[var(--ks-yellow)]" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/cart"
            className="relative flex items-center gap-1 hover:text-[var(--ks-yellow)]"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>سلة</span>
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-3 bg-[var(--ks-yellow)] text-ks-brown rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold shadow-md">
                {totalQty}
              </span>
            )}
          </NavLink>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[var(--ks-yellow)]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[var(--ks-brown)] border-t border-white/20 font-['cairo']">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition-colors hover:text-[var(--ks-yellow)] ${
                    isActive ? "text-[var(--ks-yellow)]" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="relative flex items-center gap-2 hover:text-[var(--ks-yellow)]"
            >
              <ShoppingCart className="w-5 h-5" />
              <span> سلة المشتريات</span>
              {totalQty > 0 && (
                <span className="bg-[var(--ks-yellow)] text-ks-brown rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold">
                  {totalQty}
                </span>
              )}
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
